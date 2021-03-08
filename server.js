// Import the requires modules
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// define the application
const app = express();

const port = 8000;

app.listen(port, () => {
    console.log(`We are live on localhost://${port}`);
})