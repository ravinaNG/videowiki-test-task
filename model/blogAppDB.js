const knex = require('knex');

const signUp = (data) => {
    return knex('user_details').insert(data);
};

module.exports = {signUp};