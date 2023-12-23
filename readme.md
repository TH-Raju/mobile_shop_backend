# Mobile Shop Backend

## Getting Started

### Prerequisites

Make sure you have the following software installed before running the project

- Node.js (>= 14)
- npm
- MongoDB and Mongoose

## Project Structure

- '/': Contains the source code of the Express.js application.
- '/routes' : Define all API routes.
- '/controller' : Implement route handlers and business logic.
- '/service' : hanlde Databse query operation.
  -'/model' : Define MongoDB models and Schema.
- '/config' : Connect to the database from '/env' file

  - On .env file set

  ```
   db_url =
   PORT =
   access_secret =
   refresh_secret =
  ```

### start server

git clone

```
npm i
```

- setup .env variables name in config file

```
npm run dev

or

npm start
```

- Local Server
  - http://localhost:5000

## API Routes

### User Routes

- /api/v1/signup (POST)
- /api/v1/login (POST)
- /api/v1/user (GET)

  - signup

  ```
      {
      "name": "Demo User",
      "email": "demo@gmail.com",
      "password": "1234567",
      "role": "user"
      }
  ```

  - Login with email and password
    ```
    {
    "email": "demo@gmail.com",
    "password": "1234567"
    }
    ```

### Mobile routes

- /api/v1/mobile (GET)
- /api/v1/mobile/create (POST)
- /api/v1/mobile/:id (DELETE)
- /api/v1/mobile/update/:id (PATCH)
- /api/v1/mobile/search?searchTerm=(mobileName/os/...) (GET)

### Order routes

- /api/v1/order (GET)
- /api/v1/order/create (POST)
- /api/v1/order/:id (DELETE)
