const fs = require('fs');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const mailCredentials = require('./mailCredentials.js');
const bodyParser = require('body-parser');
const betterSqlite3 = require('better-sqlite3');
const db = connectDatabase();
db.pragma('foreign_keys = ON');

function connectDatabase() {
    // looks for an existing databasefile to connect with
    try {
        return new betterSqlite3('./booking_app.db', { fileMustExist: true });
        // if there is no existing database a new one is created with the database schema
    } catch (err) {
        const db = new betterSqlite3('./booking_app.db', {
            fileMustExist: false,
        });
        const schema = fs.readFileSync('./db_schema.sql').toString();
        db.exec(schema);
        return db;
    }
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: mailCredentials.USER,
        pass: mailCredentials.PASS,
    },
});

const throwError = (code, msg) => {
    const err = new Error(msg);
    err.status = code;
    throw err;
};

app.use(bodyParser.json());

/* ENDPOINTS FOR BOOKING */
// create a booking
app.post('/booking', (req, res) => {
    const booking = req.body;

    if (!booking.hasOwnProperty('guest')) {
        throwError(400, 'guest is missing');
    }
    if (!booking.hasOwnProperty('details')) {
        throwError(400, 'details is missing');
    }

    const newBooking = createBooking(booking.guest, booking.details);

    const mailOptions = {
        from: mailCredentials.USER,
        // use own email in dev
        // use newBooking.email in deploy
        to: mailCredentials.USER,
        subject: 'Booking confirmation',
        html: `<h3>
                    Dear 
                    <span style="text-transform:capitalize">
                        ${newBooking.firstname},
                    </span>
                </h3>
                <p style="margin-bottom:2rem">
                    Your booking request has been <span style="font-weight:bold">confirmed</span>.
                </p>
                <h3>Your booking:</h3>
                <p>
                    <span style="text-transform:capitalize">
                        ${newBooking.firstname}
                    </span> 
                    <span style="text-transform:capitalize">
                        ${newBooking.lastname}
                    </span>
                </p>
                <p>
                    ${newBooking.num_of_guests} people
                </p>
                <p style="margin-bottom:1.5rem">
                    ${newBooking.date}, ${newBooking.time} PM
                </p>
                <p style="margin-bottom:3rem">
                    In case you have to cancel your reservation 
                    <a href="http://localhost:3000/Cancellation/${
                        newBooking.id
                    }">
                        please follow this link.
                    </a>
                </p>
                <p>Sincerely,</p>
                <p>the staff at Le'licous</p>
        `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
    });

    res.send(newBooking);
});

// update a booking
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

// delete a booking
app.delete('/booking/:id', (req, res) => {
    const bookingDetails = getBooking(req.params.id);
    if (!bookingDetails) {
        throwError(404, 'booking not found');
    }

    const result = deleteBooking(req.params.id);
    if (result.changes === 0) {
        throwError(500, 'booking could not be deleted');
    }

    const mailOptions = {
        from: mailCredentials.USER,
        // use own email in dev
        // use newBooking.email in deploy
        to: mailCredentials.USER,
        subject: 'Booking cancellation',
        html: `<h3>
                    Dear 
                    <span style="text-transform:capitalize">
                        ${bookingDetails.firstname},
                    </span>
                </h3>
                <p style="margin-bottom:2rem">
                    Your booking has been <span style="font-weight:bold">cancelled</span> at your request.
                </p>
                <h3>Booking details for cancelled booking:</h3>
                <p>
                    <span style="text-transform:capitalize">
                        ${bookingDetails.firstname}
                    </span> 
                    <span style="text-transform:capitalize">
                        ${bookingDetails.lastname}
                    </span>
                </p>
                <p>
                    ${bookingDetails.num_of_guests} people
                </p>
                <p style="margin-bottom:1.5rem">
                    ${bookingDetails.date}, ${bookingDetails.time} PM
                </p>
                <p style="margin-bottom:1.5rem">
                    You are always welcome to make a new booking on our 
                    <a href="http://localhost:3000/Reservation">webpage</a>
                    or by calling 070 000 00 00.
                </p>
                <p>Sincerely,</p>
                <p>the staff at Le'licous</p>
                `,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
    });

    res.status(204).end();
});

// get a booking by id
app.get('/booking/:id', (req, res) => {
    const booking = getBooking(req.params.id);

    if (!booking) {
        throwError(404, 'booking not found');
    }

    res.send(booking);
});

// get all bookings
app.get('/booking', (req, res) => {
    const bookings = getBookings();
    res.send(bookings);
});

// returns error message as json in browser
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send({ message: err.message });
});

const createBooking = (guest, details) => {
    db.prepare(
        /*sql*/ `
        INSERT 
            INTO guest (firstname, lastname, email, phone) 
        VALUES
            (?, ?, ?, ?)`
    ).run(guest.firstname, guest.lastname, guest.email, guest.phone);

    db.prepare(
        /*sql*/ `
        INSERT
            INTO details (guest_id, num_of_guests, time, date)
        VALUES
            ((SELECT seq FROM sqlite_sequence WHERE name = 'guest'), ?, ?, ?)`
    ).run(parseInt(details.numOfGuests) || null, details.time, details.date);

    db.prepare(
        /*sql*/ `
        INSERT
            INTO booking (guest_id, details_id)
        VALUES
            (
                (SELECT seq FROM sqlite_sequence WHERE name = 'guest'), 
                (SELECT seq FROM sqlite_sequence WHERE name = 'details')
            )`
    ).run();

    const bookingIdRow = db
        .prepare(
            /*sql*/ `SELECT seq FROM sqlite_sequence WHERE name = 'booking'`
        )
        .get();
    return getBooking(bookingIdRow.seq);
};

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
