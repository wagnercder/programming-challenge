var database = require('./../../database/connection');
var Genres = require("../genres/genres");
var Categories = require('../categories/categories');

database.model();

var Title = database.Model.extend({
    tableName: 'titles',
    idAttribute: 'id',

    genres: function() {
        return this.hasMany(Genres, 'title_id');
    },

    categories: function() {
        return this.belongsTo(Categories, 'category_id');
    },
   
},{

});

module.exports = database.model('Title', Title);
