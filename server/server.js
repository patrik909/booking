const fs = require("fs");
const express = require("express");
const app = express();
const betterSqlite3 = require("better-sqlite3");
const db = connectDatabase();
db.pragma("foreign_keys = ON");

function connectDatabase() {
  try {
    return new betterSqlite3("./booking_app.db", { fileMustExist: true });
  } catch (err) {
    const db = new betterSqlite3("./booking_app.db", {
      fileMustExist: false
    });
    const schema = fs.readFileSync("./db_schema.sql").toString();
    db.exec(schema);
    return db;
  }
}

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
// });

app.get("/create-details", (req, res) => {
  const details = createDetails(
    req.query.guestId,
    req.query.numOfGuests,
    req.query.time,
    req.query.date
  );

  res.send(details);
});

app.get("/create-guest", (req, res) => {
  if (!req.query.firstname) {
    const err = new Error("missing first name");
    err.status = 400;
    throw err;
  }

  const guest = createGuest(
    req.query.firstname,
    req.query.lastname,
    req.query.email,
    req.query.phone
  );

  res.send(guest);
});

app.get("/create-booking", (req, res) => {
  const booking = createBooking(req.query.guestId, req.query.detailsId);
  res.send(booking);
});

app.get("/guests", (req, res) => {
  const guests = getGuests();
  res.send(guests);
});

app.get("/booking", (req, res) => {
  getBookings((err, rows) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(rows);
  });
});

// returns error message as json
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({ message: err.message });
});

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
            select * from details where id = 
            (select seq from sqlite_sequence where name = 'details')`
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
                * FROM booking WHERE id = 
            (SELECT 
                seq FROM sqlite_sequence WHERE name = 'booking')`
    )
    .get();
};

const getGuests = () => {
  return db.prepare(/* sql */ `SELECT * FROM guest`).all();
};

const getBookings = () => {
  return db.prepare(/* sql */ `
        SELECT
            * FROM booking 
        JOIN
            details ON details.id = 
            booking.details_id`);
};

app.listen(4001, () => console.log("Booking app listening on port 4001!"));
