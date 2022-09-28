$(function() {

    $(".control--select").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("opened");
    });

});