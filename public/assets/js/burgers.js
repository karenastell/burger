$(".submit-btn").on("click", (event) => {
  event.preventDefault();

  const newBurger = {
    name: $(".input-burger").val().trim(),
  };
  console.log(newBurger);

  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(() => {
    console.log("Created New Burger");
    location.reload();
  });
});

$(".eat").on("click", function() {
    const id = $(this).data("id");
    console.log(id);

    $.ajax(`api/burgers/${id}`, {
        type: "PUT",
        data: id
    }).then(()=>{
        console.log("Ate the burger");
        location.reload();

    })
});


