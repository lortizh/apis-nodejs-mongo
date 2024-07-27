# Node.js API with Express, Mongoose, and MongoDB Atlas
## Description
This project is a Node.js application that uses Express for the server, Mongoose for MongoDB object modeling, and MongoDB Atlas as the database. The application fetches data from external APIs, stores it in a MongoDB database, and provides endpoints to query the stored data.

### Features
- Fetch data from external APIs
- Store fetched data in MongoDB Atlas using Mongoose
- Query stored data with support for **pagination**
- Update existing records if they already exist

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB Atlas account and connection string

## Getting Started
### Installation
1. Clone the repository:

```git clone https://github.com/lortizh/apis-nodejs-mongo.git```

```cd your-repo```

2. Install dependencies:

```npm install```

3. Create a .env file in the root of the project and add your MongoDB Atlas connection string:

```MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority```

## Running the Application
Start the development server:

```npm start```

## API Endpoints
### Fetch and Store Data (Rick and Morty)
**POST /api/rickandmorty/data**

Fetches data from an external API and stores it in the MongoDB database.

- Request Body: None
- Response: Array of stored data objects

### Fetch and Store Data (Pokemon)
**POST /api/pokemon/data**

Fetches data from an external API and stores it in the MongoDB database.

- Request Body: None
- Response: Array of stored data objects

### Fetch and Store Data (Star Wars)
**POST /api/starwars/data**

Fetches data from an external API and stores it in the MongoDB database.

- Request Body: None
- Response: Array of stored data objects

### Query Data by nameApi
**GET /api/data/search**
Queries the stored data by **nameApi** and supports **pagination**.

**Query Parameters:**
- nameApi (optional): Filter results by nameApi
- page (optional): Page number (default is 1)
- limit (optional): Number of results per page (default is 10)

**Response:**

```
{
  "count": 2,
  "totalPages": 1,
  "currentPage": 1,
  "results": [
    {
      "apiId": "1",
      "name": "Rick Sanchez",
      "nameApi": "rickandmorty",
      "createdAt": "2024-07-11T04:39:50.820Z",
      "updatedAt": "2024-07-11T04:39:50.820Z",
      "__v": 0
    },
    {
      "apiId": "2",
      "name": "Morty Smith",
      "nameApi": "rickandmorty",
      "createdAt": "2024-07-11T04:39:50.853Z",
      "updatedAt": "2024-07-11T04:39:50.853Z",
      "__v": 0
    }
  ]
}

```
