var knex = require('knex')({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'sidia_challenge'
    }
});

var bookshelf = require('bookshelf')(knex);
bookshelf.model();
module.exports = bookshelf;


