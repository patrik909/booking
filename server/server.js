const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./booking_app.db', sqlite3.OPEN_READWRITE);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.use(express.static('public'));

app.get('/create-details', (req, res) => {
    createDetails(
        req.query.guestId,
        req.query.numOfGuests,
        req.query.time,
        req.query.date,
        (err, row) => {
            if (('express', err)) {
                console.log(err);
            }
            res.send(row);
        }
    );
});

app.get('/create-guest', (req, res) => {
    createGuest(
        req.query.firstname,
        req.query.lastname,
        req.query.email,
        req.query.phone,
        (err, row) => {
            if (err) {
                console.log('express', err);
            }
            res.send(row);
        }
    );
});

app.get('/create-booking', (req, res) => {
    createBooking(req.query.userId, req.query.detailsId, (err, res) => {
        res.send(rows);
    });
});

app.get('/guests', (req, res) => {
    getGuests((err, rows) => {
        res.send(rows);
    });
});

app.get('/booking', (req, res) => {
    getBookings((err, rows) => {
        res.send(rows);
    });
});

db.get(`PRAGMA foreign_keys = ON`, () =>
    app.listen(3000, () => console.log('Example app listening on port 3000!'))
);

const createDetails = (guestId, numOfGuests, time, date, cb) => {
    db.serialize(() => {
        db.run(
            `insert
                into details (guest_id, num_of_guests, time, date)
            values
                (${guestId}, ${numOfGuests}, ${time}, ${date})`,
            function(err) {
                if (err) {
                    cb(err);
                    console.log(err);
                    return;
                }
                db.get(
                    `select * from details where id = 
                    (select seq from sqlite_sequence where name = 'details'`,
                    cb
                );
            }
        );
    });
};

const createGuest = (firstname, lastname, email, phone, cb) => {
    db.serialize(() => {
        console.log('Test', firstname);

        db.run(
            `INSERT INTO guest ('firstname', 'lastname', 'email', 'phone') VALUES
                ('${firstname}', '${lastname}', '${email}', '${phone}')`,
            function(err) {
                if (err) {
                    cb(err);
                    console.log(err.message);
                    return;
                }
                db.get(
                    `select * from guest where id = 
                    (select seq from sqlite_sequence where name = 'guest'`,
                    cb
                );
            }
        );
    });
};

const createBooking = (userId, detailsId, cb) => {
    db.serialize(() => {
        db.run(
            `
        insert 
            into booking (user_id, details_id)
        values
            ${userId}, ${detailsId}`,
            function(err) {
                if (err) {
                    cb(err);
                    console.log(err);
                    return;
                }
                db.get(
                    `select * from booking where id = 
                    (select seq from sqlite_sequence where name = 'booking'`,
                    cb
                );
            }
        );
    });
};

const getGuests = cb => {
    db.all(`select * from guest`, cb);
};

const getBookings = cb => {
    db.all(
        `select 
            * from booking 
        join 
            details on details.id = 
            booking.details_id`,
        cb
    );
};
