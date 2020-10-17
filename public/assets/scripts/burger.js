// jQuery function to give html functionality
$(function () {
  //creating an on submit event for the create form that adds burgers
  $(".create-form").on("submit", (e) => {
    // since the button is in a form it needs a prevent default to keep it from submitting without proper instruction
    e.preventDefault();

    //creating an object that has the information to bring to the controller for the new burger entered by the user
    const newBurger = {
      //grabbing the value from the text input
      burger_name: $("#newBurger").val().trim(),
      //grabbing the value from the radio buttons for devoured
      devoured: $("[name=devour]:checked").val().trim(),
    };

    //using ajax to pass the information from HTML to the controller
    $.ajax("/api/burgers", {
      //PORT method
      type: "POST",
      //newBurger object with user entered information
      data: newBurger,
      //promise
    }).then(() => {
      //log to console success message
      console.log("User added a new burger");
      //reload the page to display the new burger in the appropriate card - Ready to Eat/Devoured
      location.reload();
    });
  });

  //creating an on click event for button that toggles devoured true/false in the li
  $(".eatBurger").on("click", function (e) {
    //no reason to prevent default since button is not in a form; did anyway for consistency
    e.preventDefault();

    //creating variables to use in the ajax call
    //pulling the id using "this" keyword for context
    const id = $(this).data("id");
    //grabbing the current value of devoured from the element clicked using "this" keyword for context
    const newDevour = $(this).data("devourstate");
    //also getting the name of the burger
    const burgerName = $(this).data("burgername");
    //creating a devoured state object to pass into the appropriate controller function for updating a burger
    const devouredState = {
      //setting the devoured state to the opposite of what it was when the button was clicked using "!"
      devoured: !newDevour,
    };

    //using ajax to pass the information obtained from HTML to the controller
    $.ajax("/api/burgers/" + id, {
      //PUT method
      type: "PUT",
      //devoured state object
      data: devouredState,
      //promise
    }).then(() => {
      //success message to log to console
      console.log(`User has devoured ${burgerName}`);
      //Reload the page with the burger moved from its original column to the other column depending on what the devoured value was when it was clicked
      location.reload();
    });
  });

  //creating an on click event for button that will delete a burger
  $(".trashBurger").on("click", function (e) {
    //no reason to prevent default since button is not in a form; did anyway for consistency
    e.preventDefault();

    //creating variables to use in the ajax call
    //pulling the ide using "this" keyword for context
    const id = $(this).data("id");
    //also getting the name of teh burger
    const burgerName = $(this).data("burgername");

    //using ajax to pass the information obtained form HTML to the controller
    $.ajax("/api/burgers/" + id, {
      //DELETE method
      type: "DELETE",
      //promise
    }).then(() => {
      //success message to log to the console
      console.log(`User has trashed ${burgerName}`);
      //Reload the page with the burger that has been deleted no longer displayed in either card
      location.reload();
    });
  });
});
