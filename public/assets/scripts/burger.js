$(function () {
  $(".create-form").on("submit", (e) => {
    e.preventDefault();

    const newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: $("[name=devour]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("User added a new burger");
      location.reload();
    });
  });

  $(".eatBurger").on("click", function (e) {
    e.preventDefault();

    const id = $(this).data("id");
    const newDevour = $(this).data("devourState");

    const devouredState = {
      devoured: newDevour,
    };
    console.log("this is devoured state:", devouredState);
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(() => {
      console.log("User has devoured a burger");
      location.reload();
    });
  });

  $(".trashBurger").on("click", function (e) {
    e.preventDefault()
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(() => {
      console.log("User has trashed this burger");
      location.reload();
    });
  });
});
