$(".submit-btn").on("click", (event)=>{
    event.preventDefault();

    let newBurger = {
        name: $(".input-burger").val().trim(),
    }
    console.log(newBurger);
    

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(()=>{
        console.log("Created New Burger");
        location.reload();
        
    })
})