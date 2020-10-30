var express = require("express");

var router = express.Router();

// Import the model (recipe.js) to use its database functions.
var recipe = require("../models/recipe.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    recipe.all(function(data) {
      var hbsObject = {
        recipe: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.get("/feed", function(req, res) {
    recipe.all(function(data) {
      var hbsObject = {
        recipe: data
      };
      console.log(hbsObject);
      res.render("feed", hbsObject);
    });
  });
  
//   FIGURE OUT HOW TO GET RECIPE SEARCHED IN TO THE BODY
  router.post("/api/recipe", function(req, res) {
    recipe.insertOne([
      "name", "recipeImage", "instructions"
    ], [
      req.body.name, req.body.recipeImage, req.body.instructions
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
//   Still the old update CRUD FROM burgers homework. Maybe we can modify in to like "Recipe Cooked or Not"
//   router.put("/api/recipe/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
//     var colVal = "devoured=" + req.body.devoured;
//     console.log("condition", condition);
  
//     burger.updateOne(
//       colVal
//     , condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
  
router.delete("/api/recipe/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    recipe.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  // Export routes for server.js to use.
  module.exports = router;