// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var recipe = {
  all: function(cb) {
    orm.selectAll("recipes", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, value, cb) {
    orm.insertOne("recipes", cols, value, function(res) {
      cb(res);
    });
  },
  updateOne: function(colVals, condition, cb) {
    orm.updateOne("recipes", colVals, condition, function(res) {
      cb(res);
    });
},
    delete: function(condition, cb) {
    orm.delete("recipes", condition, function(res) {
    cb(res);
  });
}
};

// Export the database functions for the controller (catsController.js).
module.exports = recipe;
