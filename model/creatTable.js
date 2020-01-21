const knex = require('../knexFile');

knex.schema.hasTable('user_details').then((exists) => {
    if(!exists) {
        return knex.schema.createTable('user_details', function(table) {
            table.increments('id');
            table.string('user_name');
            table.string('email_address').unique()
            table.string('password');
          })
        .catch((err)=> {
            console.log(err, 'There is some error while writing the query')
        })
    }
    return console.log('This name of table has already created.')
})

