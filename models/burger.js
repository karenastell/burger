const orm = require("../config/orm");

const burger = {
  view: () => {
    return new Promise((resolve, reject) => {
      orm.selectAll("burgers").then((result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  create: () => {
    return new Promise((resolve, reject) => {
      orm.insertOne("burgers", "burger_name", name).then((result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  update: (id) => {
    return new Promise((resolve, reject) => {
      orm.updateOne("burger", "devoured", true, id).then((result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};

module.exports = burger;
