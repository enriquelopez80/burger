$(document).ready(function() {

    $("#newSubmit").on("click", function(event) {
       
        event.preventDefault();

        let newBurger = {
        burger_name: $("#newBurger").val().trim()
        };

     
        $.ajax({
            url: "/add/burger",
            type: "POST",
            data: newBurger,
            success: function () {
                $("#new-burger").val("");
                location.reload();
            }
        })

    })

///Here I would add code to update to devoured

//It would be some kind of ajax with put



});