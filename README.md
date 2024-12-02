# Backend

This folder contains the backend code for the RBAC (Role-Based Access Control) project.

## Project Structure

```
/backend
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├──utils
|   └──scripts
├── tests
├── config
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/RBAC.git
    ```
2. Navigate to the backend folder:
    ```sh
    cd RBAC/backend
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Configuration

1. Create a `.env` file in the root of the backend folder.
2. Add the following environment variables:
    ```env
    MONGO_URL = "you connection string of mongoDb"
    MONGO_DB = "name of your database"
    CLIENT_URL = *
    PORT = 8000

    ACCESS_TOKEN_SECRET= "unique access token"
    ACCESS_TOKEN_EXPIRY= 1d
    REFRESH_TOKEN_SECRET= "unique refresh token
    REFRESH_TOKEN_EXPIRY= 10d
    ```

### Running the Server

To start the development server, run:
```sh
npm run dev
```
or
```sh
yarn dev
```

### Running Tests

To run tests, use:
```sh
npm test
```
or
```sh
yarn test
```