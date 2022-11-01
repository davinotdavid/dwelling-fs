# [Backend] Senior Fullstack Developer Technical Test

Live link (API only): https://dwelling-fs-production.up.railway.app

## How to run (in development mode)

```bash
npm start
```

## How to run tests

```bash
npm test
```

## Tech stack

I've tried to keep the backend as simple as possible while still doing some (minor) architectural decisions. I've used:

- Node
  - Since it was a requirement to do in JS
- Express
  - Simplicity. I felt like if I chose something else it would be massively overkill and many other frameworks apparently derive from Express anyways.
- MongoDB and Mongoose
  - Familiarily and pairing nice with the object nature of JS. MongoDB was hosted separetedly in [MongoDB Atlas](https://www.mongodb.com/atlas/database) just so I could skip its configuration. Mongoose was chosen since I've already used it in a previous company.
- Vitest
  - Great unit test framework with nearly 0 configuration and super fast. Has ESM and TypeScript out-of-the-box (even though I didn't use TS here due to the requirements of the exercise).

## Hosting / Deploy

Since Heroku is not free anymore (RIP), I've used [Railway](https://railway.app/) for the first time and I had a very nice DX experience.

## If I had time I would've...

... added a logger middleware.

... added more tests, specially in relation with the database.

... configured a test database (hosted) to separate production and development / test environments

## Routes

- **GET** /credit-cards
- **POST** /credit-cards
  ```JSON
  // Request body example
  {
    body: "cardNumber": "1234123412341234"
  }
  ```
- **DELETE** / credit-cards/:id

> **NOTE**: The PUT request was not implemented as it didn't seem relevant for this exercise, considering the design files.
