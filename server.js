// Import the requires modules
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db')

// For mongoose
// mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//     .catch((error) => console.log(error.message));

// define the application
const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }))



mongoClient.connect(db.url, (err, client) => {
    if (err) return console.log(err);
    require('./app/routes')(app, client);
    app.listen(port, () => {
        console.log(`We are live on localhost://${port}`);
    })
})