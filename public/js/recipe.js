// Modify buttons so that we can search and SAVE recipes using AJAX
$(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var searched = document.getElementById("searchedWord").value;
        console.log(searched);

        var entreeQueryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searched;

        $.ajax({
            url: entreeQueryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var recipeColumn = $("<div>");
            var recipeCard = $("<div>").addClass("card recipe-card col-5");
            var content = $("<div>").addClass("card-content");
            var entreeName = $("<h5>").text(response.meals[0].strMeal);
            var entreeImage = $("<img>").attr("src", response.meals[0].strMealThumb).addClass("entreeImage col-6");
            var entreeRecipe = $("<p>").text(response.meals[0].strInstructions);
            var saveButton = $("<button>").text("Save Recipe").addClass("saveButton");
            

            content.append(entreeName, entreeImage, entreeRecipe, saveButton);
            recipeCard.append(content);
            recipeColumn.append(recipeCard);
            $("#recipeCards").prepend(recipeColumn);

            $(".saveButton").on("click", function(event) {
                // Make sure to preventDefault on a submit event.
                event.preventDefault();
            
                var newRecipe = {
                  name: response.meals[0].strMeal,
                  recipeImage: response.meals[0].strMealThumb,
                  instructions: response.meals[0].strInstructions
                };
            
                // Send the POST request.
                $.ajax("/api/recipe", {
                  type: "POST",
                  data: newRecipe
                }).then(
                  function() {
                    console.log("Saved the recipe!");
                    // Reload the page to get the updated list
                    location.reload();
                  }
                );
              });

    })
    
})});

// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $(".change-devoured").on("click", function(event) {
//       var id = $(this).data("id");
//       var newdevoured = $(this).data("newdevoured");
  
//       var newDevouredState = {
//         devoured: newdevoured
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/burger/" + id, {
//         type: "PUT",
//         data: newDevouredState
//       }).then(
//         function() {
//           console.log("changed devoured to", newdevoured);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newBurger = {
//         burger_name: $("#ca").val().trim(),
//         devoured: $("[name=devoured]:checked").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/burger", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//   });