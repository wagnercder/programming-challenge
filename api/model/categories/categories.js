var database = require('./../../database/connection');
var Titles = require('../titles/titles');

database.model();

var Categories = database.Model.extend({
    tableName: 'categories',
    idAttribute: 'id',

    titles: function() {
        return this.hasMany(Titles, 'category_id');
    },

},{

});

module.exports = database.model('Categories', Categories);
