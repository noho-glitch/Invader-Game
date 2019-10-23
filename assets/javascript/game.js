$(document).ready(function(){
$(".space-invaders").on("click", function() {

    alert("test");
    });
});

$(document).ready(function(){
$("#cyan").on("click", function() {

    alert("test");
    });
});

$(document).ready(function() {
    var random = Math.floor(Math.random() * 100) + 19;
    $("#targetNumber").text(random);
    console.log(random)
});