// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function() {

  // Capture click on devoured button
  $(".change-devoured").on("click", function(event) {
    // Make sure to preventDefault on submit event
    event.preventDefault();

    // Capture id of burger that has been eatan
    const id = $(this).data("id");

    // Capture new devoured state
    const newDevoured = $(this).data("newdevoured");

    // Build object response
    const newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    })
    .then(function() {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Capture click on new burger creation
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Create new burger object
    const newBurger = {
      burger_name: $("#bg").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    })
    .then(function() {

      // Clear new burger form
      $("#bg").val("");
      
      // Reload the page to get the updated list
      location.reload();
    });
  });
});