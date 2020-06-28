const mysql = require("mysql");
require("dotenv").config();

// creates the connection to Heroku or localhost 8080 to access database

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
}





connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
