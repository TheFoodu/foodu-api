# Foodu API


## Sections

* [Introduction](#introduction)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
* [Built With](#built-with)
* [API Documentation](#api-documentation)
* [Contributors](#contributors)
* [License](#license)

## Introduction

Foodu is a B2B marketplace to connect food trucks with venues & event planners – giving them a platform for data-driven decision making. Using the Foodu platform, food trucks will be able to manage their bookings, request new venues and engage with customers.

The Foodu API provides the [Foodu mobile application](https://github.com/TheFoodu/foodu/) access to the Foodu booking database. 

<image src="https://user-images.githubusercontent.com/26471447/40822391-254a09b4-6529-11e8-9648-9e910bc658b3.png" width="250" />

Instructions for getting started will be found in the following GitHub repositories.

[Foodu Native Application Repository](https://github.com/TheFoodu/foodu)

[Foodu Backend Repository](https://github.com/TheFoodu/foodu-api)

## Prerequisites

Prerequsities for running the Foodu API locally include:

* [NPM](https://www.npmjs.com/)
* [Node](https://yarnpkg.com/)
* [PostgreSQL](https://www.postgresql.org/)

## Getting Started

Download this repository to your local computer with the following terminal command:

```
git clone https://github.com/TheFoodu/foodu-api/
```

psql and migrate
Open PostgreSQL with the following command in your terminal:
```
psql
```

From PostgreSQL, create a database with the following command:
```
CREATE DATABASE foodu;
```

Quit PostgreSQL with the following command:
```
\q
```

Navigate to the Foodu api directory and install project dependancies with the following terminal command:

```
npm install
```

Migrate and seed the database with the following commands:
```
knex migrate:latest
knex seed:run
```

Package and compile project files for emulation with the following terminal command:

```
node start
```

The application will be hosted at http://localhost:3000/.

## Built With

```
* Node
* Express
* Knex
* PostgreSQL
```

## API Documentation

### `Resources`

 **NOTES**

- All API requests will be returned JSON format.

#### _HTTP Status Codes_
All responses will be returned with one of the following HTTP status codes:

* `200` `OK` The request was successful
* `201` `Created` The request has added a row in our database.
* `404` `Not found` The resource could not be found
* `500` `Internal Server Error` Unexpected error was encountered on server side

### Bookings

#### <code>GET</code> /api/v1/bookings

Example **request:**
  - No body required/accepted

Example **response:**
```
[
  {
    "id": 1,
    "foodtruck_auth_id": "CLkh5QadsoOF1he68RXUOrFUIyi1",
    "venue_id": 1,
    "date": "2018-07-02T06:00:00.000Z",
    "status": "confirmed",
    "time_range": "1:00 - 4:00",
    "created_at": "2018-06-02T19:50:57.610Z"
  }
]
```

## Contributors

* [John Leach](https://github.com/johnredcouch)
* [Shawn Meek](https://github.com/iamshawnmeek)
* [Greg Moore](https://github.com/gmoore-erg)
* [Nick Teets](https://github.com/nicktu12)
* [Jonah Walker](https://github.com/SupposedlySam)
* [Dione Wilson](https://github.com/dionew1)

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for details.
