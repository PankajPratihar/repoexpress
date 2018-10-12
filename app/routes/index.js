const noteRoutes = require('./note_routes')
//master route file
module.exports = function (app, db) {
    noteRoutes(app, db);
}