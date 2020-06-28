// when the submit button is clicked
$(".submit-btn").on("click", (event) => {
  event.preventDefault();
// the value of the input is put into a variable
  const newBurger = {
    name: $(".input-burger").val().trim(),
  };
  console.log(newBurger);

  // that variable is passed into the ajax request
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger,
  }).then(() => {
      // the page is re-loaded to show the changes
    console.log("Created New Burger");
    location.reload();
  });
});


// when the Eat-Da-Burger button is clicked
$(".eat").on("click", function() {
    // the data id from the button is put into a variable
    const id = $(this).data("id");
    console.log(id);

    // that variable is passed into the ajax request
    $.ajax(`api/burgers/${id}`, {
        type: "PUT",
        data: id
    }).then(()=>{
        console.log("Ate the burger");
        // the page is re-loaded to show the changes
        location.reload();

    })
});


