const noteRoutes = require('./note_routes');

module.exports = function (app, db) {
    noteRoutes(app, db)    ;
}


// this is  a test
