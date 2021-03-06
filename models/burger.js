const orm = require("../config/orm");


// these functions make the orm functions database specfic
const burger = {
    
  view: () => {
    return new Promise((resolve, reject) => {
      orm.selectAll("burgers").then((result) => {
        resolve(result);
      });
    });
  },

  create: (name) => {
    return new Promise((resolve, reject) => {
      orm.insertOne("burgers", "burger_name", name).then((result) => {
        console.log(result);

        resolve(result);
      });
    });
  },

  update: (id) => {
    return new Promise((resolve, reject) => {
      orm.updateOne("burgers", "devoured", 1, id).then((result) => {
        resolve(result);
      });
    });
  },
};

module.exports = burger;
