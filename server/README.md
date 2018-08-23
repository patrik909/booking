# API Docs

REST API built with Express and better-sqlite3.

# Getting started

Clone or download this repository and follow this guide.

### Prerequisites

-   [Node 8](https://nodejs.org/en/) (with npm)
-   [Yarn](https://yarnpkg.com/lang/en/)

### Usage

Run the following to install **Express** and **better-sqlite3**

```
yarn
```

or if you prefer npm

```
npm install
```

### Run

Run the following to start the server

```
cd server
```

```
yarn start
```

or if you prefer npm

```
npm start
```

An empty database will be generated when server starts.

# Endpoints

The api has the following endpoints to retrieve, insert, delete or update content.

## Getting content

### Get all bookings

```
GET api/booking
```

Response body:

```
{
    "id": 1,
    "guest_id": 1,
    "details_id": 1,
    "num_of_guests": 2,
    "time": "21:00",
    "date": "2018-08-30"
  }
```

### Get booking by ID

```
GET api/booking/:bookingId
```

Response body:

```
{
  "id": 1,
  "guest_id": 1,
  "details_id": 1
}
```

### Get all guests

```
GET api/guests
```

Response body:

```
{
    "id": 1,
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "example@mail.com",
    "phone": "000 000 00"
  }
```

## Adding content

### Create a new guest

```
POST api/guest
```

Request body:

```
{
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "example@email.com",
    "phone": "000 000 00"
}
```

Response body:

```
{
  "id": 1,
  "firstname": "Jane",
  "lastname": "Doe",
  "email": "example@email.com",
  "phone": "000 000 00"
}
```

### Create new details

```
POST api/details
```

Request body:

```
{
    "guestId": 1,
    "numOfGuests": 2,
    "time": "21:00"
    "date": "2018-08-30",
}
```

Response body:

```
{
  {
    "id": 1,
    "guest_id": 1,
    "num_of_guests": 2,
    "time": "21:00",
    "date": "2018-08-30"
}
}
```

### Create a new booking

```
POST api/booking
```

Request body:

```
{
    "guestId": 1,
    "detailsId": 1
}
```

Response body:

```
{
  "id": 1,
  "guest_id": 1,
  "details_id": 1
}
```

## Deleting content

### Delete a booking

```
DELETE api/booking/:bookingId
```

Response:

```
Status 204 No Content
```

## Updating content

### Update a booking by ID

```
PUT api/booking/:bookingId
```

Request body:

```
  {
    numOfGuests: 4,
    time: "18:00",
    date: "2018-08-30"
  }
```

Response body:

```
{
    "id": 1,
    "guest_id": 1,
    "details_id": 1,
    "num_of_guests": 4,
    "time": "18:00",
    "date": "2018-08-30",
    "firstname": "Jane",
    "lastname": "Doe",
    "email": "example@mail.com",
    "phone": "000 000 00"
  }
```
