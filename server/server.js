const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const betterSqlite3 = require('better-sqlite3');
const db = connectDatabase();
db.pragma('foreign_keys = ON');

function connectDatabase() {
    // looks for an existing databasefile to connect with
    try {
        return new betterSqlite3('./booking_app.db', { fileMustExist: true });
        // if there is no existing database a new one is created
        // with the database schema
    } catch (err) {
        const db = new betterSqlite3('./booking_app.db', {
            fileMustExist: false,
        });
        const schema = fs.readFileSync('./db_schema.sql').toString();
        db.exec(schema);
        return db;
    }
}

const throwError = (code, msg) => {
    const err = new Error(msg);
    err.status = code;
    throw err;
};

app.use(bodyParser.json());

// ENDPOINTS FOR BOOKING
app.get('/booking', (req, res) => {
    const bookings = getBookings();
    res.send(bookings);
});

app.get('/booking/:id', (req, res) => {
    const booking = getBooking(req.params.id);

    if (!booking) {
        throwError(404, 'booking not found');
    }

    res.send(booking);
});

app.get('/create-booking', (req, res) => {
    if (!req.query.guestId) {
        throwError(400, 'guestId is missing');
    }
    if (!req.query.detailsId) {
        throwError(400, 'detailsId is missing');
    }

    const booking = createBooking(req.query.guestId, req.query.detailsId);

    res.send(booking);
});

app.put('/booking/:id', (req, res) => {
    const booking = req.body;

    if (!booking.hasOwnProperty('numOfGuests')) {
        throwError(404, 'number of guests is missing');
    }
    if (!booking.hasOwnProperty('time')) {
        throwError(400, 'time is missing');
    }
    if (!booking.hasOwnProperty('date')) {
        throwError(400, 'date is missing');
    }

    const bookingId = req.params.id;
    const updatedBooking = updateBooking(bookingId, booking);

    res.send(updatedBooking);
});

app.delete('/booking/:id', (req, res) => {
    const result = deleteBooking(req.params.id);

    if (result.changes === 0) {
        throwError(404, 'booking not found');
    }

    res.status(204).end();
});

// ENDPOINTS FOR DETAILS
app.get('/create-details', (req, res) => {
    if (!req.query.guestId) {
        throwError(400, 'guestId is missing');
    }
    if (!req.query.numOfGuests) {
        throwError(400, 'numOfGuests is missing');
    }
    if (!req.query.time) {
        throwError(400, 'time is missing');
    }
    if (!req.query.date) {
        throwError(400, 'date is missing');
    }

    const details = createDetails(
        req.query.guestId,
        req.query.numOfGuests,
        req.query.time,
        req.query.date
    );

    res.send(details);
});

// ENDPOINTS FOR GUEST
app.get('/guests', (req, res) => {
    const guests = getGuests();
    res.send(guests);
});

app.get('/create-guest', (req, res) => {
    if (!req.query.firstname) {
        throwError(400, 'firstname is missing');
    }
    if (!req.query.lastname) {
        throwError(400, 'lastname is missing');
    }
    if (!req.query.email) {
        throwError(400, 'email is missing');
    }
    if (!req.query.phone) {
        throwError(400, 'phone is missing');
    }

    const guest = createGuest(
        req.query.firstname,
        req.query.lastname,
        req.query.email,
        req.query.phone
    );

    res.send(guest);
});

// returns error message as json in browser
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send({ message: err.message });
});

const updateBooking = (bookingId, booking) => {
    db.prepare(
        /*sql*/ `
    UPDATE 
      details 
    SET 
      num_of_guests = ?,
      time = ?,
      date = ?
    WHERE 
      id = ?
    `
    ).run(booking.numOfGuests, booking.time, booking.date, bookingId);

    return getBooking(bookingId);
};

const createDetails = (guestId, numOfGuests, time, date) => {
    db.prepare(
        /* sql */ `
    INSERT
        INTO details (guest_id, num_of_guests, time, date)
    VALUES
        (?, ?, ?, ?)`
    ).run(parseInt(guestId) || null, parseInt(numOfGuests) || null, time, date);

    return db
        .prepare(
            /* sql */ `
            SELECT 
                * 
            FROM 
                details 
            WHERE 
                id = 
                (SELECT 
                    seq 
                FROM 
                    sqlite_sequence 
                WHERE 
                    name = 'details'
                )`
        )
        .get();
};

const createGuest = (firstname, lastname, email, phone) => {
    db.prepare(
        /* sql */ `
        INSERT 
            INTO guest (firstname, lastname, email, phone) 
        VALUES
            (?, ?, ?, ?)`
    ).run(firstname, lastname, email, phone);

    return db
        .prepare(
            /* sql */ `
            SELECT 
                * FROM guest WHERE id = 
            (SELECT 
                seq FROM sqlite_sequence WHERE name = 'guest')`
        )
        .get();
};

const createBooking = (guestId, detailsId) => {
    db.prepare(
        /* sql */ `
        INSERT
            INTO booking (guest_id, details_id)
        VALUES
            (?, ?)`
    ).run(guestId, detailsId);

    return db
        .prepare(
            /* sql */ `
            SELECT 
                * 
            FROM 
                booking 
            WHERE 
                id = 
                (SELECT 
                    seq 
                FROM 
                    sqlite_sequence
                WHERE
                    name = 'booking')`
        )
        .get();
};

const getGuests = () => {
    return db.prepare(/* sql */ `SELECT * FROM guest`).all();
};

const deleteBooking = bookingId => {
    return db
        .prepare(
            /*sql*/ `
            DELETE 
                FROM details 
            WHERE 
                id = 
            (SELECT 
                details_id 
            FROM 
                booking 
            WHERE id = ?)`
        )
        .run(bookingId);
};

const getBooking = bookingId => {
    return db
        .prepare(
            /* sql */ `
        SELECT 
          * FROM booking 
        JOIN
            details ON details.id = 
            booking.details_id
        JOIN
            guest ON guest.id =
            booking.guest_id
        WHERE 
            booking.id = ?`
        )
        .get(bookingId);
};

const getBookings = () => {
    return db
        .prepare(
            /* sql */ `
        SELECT
            * FROM booking 
        JOIN
            details ON details.id = 
            booking.details_id
        JOIN
            guest ON guest.id =
            booking.guest_id`
        )
        .all();
};

// starts the server on port 4001
app.listen(4001, () => console.log('Booking app listening on port 4001!'));
