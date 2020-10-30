// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
// This is where you define the CRUD operations that the ORM will perform.
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
      
    insertOne: function(tableInput, col, value, cb) {
      var queryString = "INSERT INTO " + tableInput + " (" + col + ") VALUES (?, ?, ?);";
      connection.query(queryString, value, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    updateOne: function(tableInput, colVal, condition, cb) {
      var queryString = "UPDATE " + tableInput + " SET " + colVal + " WHERE " + condition + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
  
};

module.exports = orm;
