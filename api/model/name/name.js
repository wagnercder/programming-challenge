var database = require('./../../database/connection');
// var Professions = require("./../professions/professions");

database.model();

var Name = database.Model.extend({
    tableName: 'names',
    idAttribute: 'id',

    // professions: function() {
    //     return this.hasMany(Professions, 'id');
    // }
   
},{
    
});

module.exports = database.model('Name', Name);
