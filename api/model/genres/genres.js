var database = require('../../database/connection');
var Titles = require('../titles/titles');

database.model();

var Genres = database.Model.extend({
    tableName: 'genres',
    idAttribute: 'Id',

    titles: function() {
        return this.belongsTo(Titles, 'title_id');
    },
   
},{
    
});

module.exports = database.model('Genres', Genres);
