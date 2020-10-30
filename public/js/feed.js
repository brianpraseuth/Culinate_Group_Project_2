// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".delete-recipe").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/recipe/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted reciipe with an id of ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  