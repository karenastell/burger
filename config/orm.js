const connection = require("./connection");

const orm = {
  // creates a query to select all the burgers from the table
  selectAll: (table) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ??`, [table], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
// creates a query to add a burger to the table
  insertOne: (table, columnName, value) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO ?? (??) VALUES (?)`,
        [table, columnName, value],
        (err, result) => {
          if (err) reject(err);
          console.log(result);

            resolve(result);
        }
      );
    });
  },

  // creates a query to change the devoured column from false to true
  updateOne: (table, columnName, value, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE ?? SET ?? = ? WHERE id = ?`,
        [table, columnName, value, id],
        (err, result) => {
          if (err) reject(err);
          console.log("orm result", result);
          resolve(result);
        }
      )
    });
  },

};

module.exports = orm;
