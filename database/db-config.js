require('dotenv').config();
const knex = require('knex');
 
var database= {
    client: 'pg',
  	connection: {
	    host     : process.env.DATABASE_URL || process.env.DB_HOST,
	    user     : process.env.PG_USER,
	    password : process.env.PG_PASSWORD,
	    database : process.env.PG_DB,
	    ssl: !!process.env.DATABASE_URL
    }
}


module.exports = {
  db: knex(database)
}


// const runDB = {
//   client: 'pg',
//   connection: {
//     host     : process.env.DATABASE_URL || process.env.DB_HOST,
//     user     : process.env.DB_USER,
//     password : process.env.DB_PASS,
//     database : process.env.DB_NAME,
//     ssl: !!process.env.DATABASE_URL
//   }
// };

