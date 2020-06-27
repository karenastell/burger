const connection = require("./connection");

const orm = {
  selectAll: (table) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ??`, [table], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  insertOne: (table, columnName, value) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO ?? (??) VALUES (?)`,
        [table, columnName, value],
        (err) => {
          if (err) reject(err);
          console.log(result);

            resolve(result);
        }
      );
    });
  },
  updateOne: (table, columnName, value, id) => {
    return new Promise((resolve, reject) => {
      connection.query(`UPDATE ?? SET ?? = ? WHERE id = ?`),
        [table, columnName, value, id],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        };
    });
  },
};

module.exports = orm;
