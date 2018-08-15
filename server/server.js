const express = require('express');
const app = express();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./booking_app.db', sqlite3.OPEN_READWRITE);

app.use(express.static('public'));

app.get('/booking', (req, res) => {
    getBookings((err, rows) => {
        res.send(rows);
    });
});

const getBookings = cb => {
    db.all(`select * from booking`, cb);
};

db.get(`PRAGMA foreign_keys = ON`, () =>
    app.listen(3000, () => console.log('Example app listening on port 3001!'))
);
