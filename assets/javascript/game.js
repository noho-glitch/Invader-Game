$(".space-invaders").on("click", function() {

    alert("test");

});

$("#cyan").on("click", function() {

    alert("test");

});

$(document).ready(function() {
    var random = Math.floor(Math.random() * 100) + 19;
    $("#targetNumber").text(random);
    console.log(random)
});