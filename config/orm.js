const connection = require("./connection");

// selectAll()
// insertOne();
// updateOne();

const orm = {
  selectAll: (table) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ??`, [table], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
  insertOne: (columnName, )=>{
      return new Promise((resolve, reject)=>{
          connection.query(`INSERT INTO ?? (??) VALUES (?)`, [], (err)=>{
              if(err) reject(err);
            //   resolve(result);
          })
      })
  }
};

module.exports = orm;
