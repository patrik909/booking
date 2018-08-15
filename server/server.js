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

app.get('/create-guest', (req, res) => {
    createGuest(
        req.query.firstname,
        req.query.lastname,
        req.query.email,
        req.query.phone,
        (err, row) => {
            res.send(row);
        }
    );
});

app.get('/booking', (req, res) => {
    getBookings((err, rows) => {
        res.send(rows);
    });
});

const createGuest = (firstname, lastname, email, phone, cb) => {
    db.serialize(
        db.run(
            `insert 
            into guest (firstname, lastname, email, phone) 
        values 
            ('${firstname}', '${lastname}', '${email}', ${phone})`,
            cb
        ),
        db.all(`select * from sqlite_sequence where seq = guest`)
    );
};

const getBookings = cb => {
    db.all(
        `select * from booking join details on details.id = booking.details_id`,
        cb
    );
};

db.get(`PRAGMA foreign_keys = ON`, () =>
    app.listen(3000, () => console.log('Example app listening on port 3001!'))
);
