const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Ravina@123',
        database: 'videowiki'
    }
});

module.exports = knex;