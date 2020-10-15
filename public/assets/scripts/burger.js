$(function () {
  $(".crerate-form").on("submit", (e) => {
    e.preventDefault();

    const newBurger = {
      burger_name: $("#newBurger").val().trim(),
      devoured: 0,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("User added a new burger");
      location.reload();
    });
  });

  $(".eatburger").on("click", function (e) {
    e.preventDefault();

    const id = $(this).data("id");
    const devouredState = {
      devoured: 1,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,
    }).then(() => {
      console.log("User has devoured a burger");
      location.reload();
    });
  });

$(".trashBurger").on("click", function(e) {
    e.preventDefault();

    const id = $(this).data("id");

    $.ajax({
        type: "DELETE",
        url: "/api/burgers/"+id
    }).then(() => {
        console.log("User has trashed this burger")
        location.reload()
    })
})

});
