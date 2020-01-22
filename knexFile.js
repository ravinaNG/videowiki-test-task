const knex = require('knex');

const connection = ({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "Ravina@123",
        database: "videowiki"
    }
});

module.exports = knex(connection);