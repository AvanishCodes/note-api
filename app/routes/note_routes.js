var objectID = require('mongodb').ObjectID;

const db = require("../../config/db");

module.exports = function (app, client) {
    // Create a new submission for the DB
    app.post('/notes', (req, res) => {
        const note = { text: req.body.body, title: req.body.title };
        var db = client.db('myFirstDatabase');
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({ 'err': "An error has occured" });
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    // Read a data from the DB
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        var objectID = require('mongodb').ObjectID;
        const details = { '_id': new objectID(id) };
        var db = client.db('myFirstDatabase');
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'err': "An error has occured" });
            } else {
                res.send(item);
            }
        });
    });

    // Update a data from the DB
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        var objectID = require('mongodb').ObjectID;
        const details = { '_id': new objectID(id) };
        var db = client.db('myFirstDatabase');
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, item) => {
            if (err) {
                res.send({ 'err': "An error has occured" });
            } else {
                res.send(item);
            }
        });
    });

    // Delete a data from the db
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        var objectID = require('mongodb').ObjectID;
        const details = { '_id': new objectID(id) };
        var db = client.db('myFirstDatabase');
        db.collection('notes').remove(details, (err, item) => {
            if (err) {
                res.send({ 'err': "An error has occured" });
            } else {
                res.send(`Note ${id} deleted`);;
            }
        });
    });
};