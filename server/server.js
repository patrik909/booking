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

app.post('/booking', (req, res) => {
    const booking = req.body;

    if (!booking.hasOwnProperty('guestId')) {
        throwError(400, 'guestId is missing');
    }
    if (!booking.hasOwnProperty('detailsId')) {
        throwError(400, 'detailsId is missing');
    }

    const newBooking = createBooking(booking);
    res.send(newBooking);
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
app.post('/details', (req, res) => {
    const details = req.body;

    if (!details.hasOwnProperty('guestId')) {
        throwError(400, 'guestId is missing');
    }
    if (!details.hasOwnProperty('numOfGuests')) {
        throwError(400, 'numOfGuests is missing');
    }
    if (!details.hasOwnProperty('time')) {
        throwError(400, 'time is missing');
    }
    if (!details.hasOwnProperty('date')) {
        throwError(400, 'date is missing');
    }

    const newDetails = createDetails(details);
    res.send(newDetails);
});

// ENDPOINTS FOR GUEST
app.get('/guests', (req, res) => {
    const guests = getGuests();
    res.send(guests);
});

app.post('/guest', (req, res) => {
    const guest = req.body;

    if (!guest.hasOwnProperty('firstname')) {
        throwError(400, 'firstname is missing');
    }
    if (!guest.hasOwnProperty('lastname')) {
        throwError(400, 'lastname is missing');
    }
    if (!guest.hasOwnProperty('email')) {
        throwError(400, 'email is missing');
    }
    if (!guest.hasOwnProperty('phone')) {
        throwError(400, 'phone is missing');
    }

    const newGuest = createGuest(guest);
    res.send(newGuest);
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

const createDetails = details => {
    db.prepare(
        /* sql */ `
    INSERT
        INTO details (guest_id, num_of_guests, time, date)
    VALUES
        (?, ?, ?, ?)`
    ).run(
        parseInt(details.guestId) || null,
        parseInt(details.numOfGuests) || null,
        details.time,
        details.date
    );

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

const createGuest = guest => {
    db.prepare(
        /* sql */ `
        INSERT 
            INTO guest (firstname, lastname, email, phone) 
        VALUES
            (?, ?, ?, ?)`
    ).run(guest.firstname, guest.lastname, guest.email, guest.phone);

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

const createBooking = booking => {
    db.prepare(
        /* sql */ `
        INSERT
            INTO booking (guest_id, details_id)
        VALUES
            (?, ?)`
    ).run(booking.guestId, booking.detailsId);

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
            booking.id as bookingId,
            booking.guest_id as guestId,
            details_id as detailsId,
            details.id as detailsId,
            num_of_guests,
            time,
            date,
            firstname,
            lastname,
            email,
            phone 
        FROM 
            booking 
        JOIN
            details ON details.id = 
           detailsId
        JOIN
            guest ON guest.id =
            guestId`
        )
        .all();
};

// starts the server on port 4001
app.listen(4001, () => console.log('Booking app listening on port 4001!'));
