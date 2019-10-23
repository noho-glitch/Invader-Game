var score = 0;
var wins = 0;
var losses = 0;
var increment = Math.floor(Math.random() * 12) + 1;

var purple1 = Math.floor(Math.random() * 12) + 1;
var cyan1 = Math.floor(Math.random() * 12) + 1;
var red1 = Math.floor(Math.random() * 12) + 1;
var green1 = Math.floor(Math.random() * 12) + 1;


$(document).ready(function () {
    $("#score").text(score);

    $("#cyan").on("click", function () {
        // score += increment;
        // alert("New score: " + score);
        console.log("Cyan")
        console.log(cyan1)
        score = score + cyan1
        console.log(score)
        $("#score").text(score);

    });

    $("#red").on("click", function () {
        // score += increment;
        // alert("New score: " + score);
        console.log("Red")
        console.log(red1)
        score += red1;
        $("#score").text(score);

    });

    $("#purple").on("click", function () {
        // score += increment;
        // alert("New score: " + score);
        console.log("purple")
        console.log(purple1)
        score += purple1;
        $("#score").text(score);

    });

    $("#green").on("click", function () {
        // score += increment;
        // alert("New score: " + score);
        console.log("green")
        console.log(green1)
        score += green1;
        $("#score").text(score);
    });


    var random = Math.floor(Math.random() * 100) + 19;
    $("#targetNumber").text(random);

    if (score === random) {
        alert("You Win!")
        wins++;
        console.log("wins: " + wins);
    }

    else if (score >= random) {
        losses++;
        console.log("losses: " + losses);
    }


});



