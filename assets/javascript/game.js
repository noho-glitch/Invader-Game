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
    $("#winsCount").text(wins);
    $("#lossesCount").text(losses);


    var random = Math.floor(Math.random() * 100) + 19;
    $("#targetNumber").text(random);

    function checkWin() {
        if (score === random) {
            alert("You Win!")
            wins++;
            $("#winsCount").text(wins);
            score = 0;
            console.log("wins: " + wins);
            random = Math.floor(Math.random() * 100) + 19;


        }
    
        else if (score >= random) {
            losses++;
            $("#lossesCount").text(losses);
            score = 0;
            console.log("losses: " + losses);
            random = Math.floor(Math.random() * 100) + 19;
        }

        $("#score").text(score);
        $("#targetNumber").text(random);
    }

    $("#cyan").on("click", function () {
        // score += increment;
        // alert("New score: " + score);
        console.log("Cyan")
        console.log(cyan1)
        score = score + cyan1
        console.log(score)
        checkWin()
    });

    $("#red").on("click", function () {
        // score += increment;
        // alert("New score: " + score);
        console.log("Red")
        console.log(red1)
        score += red1;
        checkWin();
    });

    $("#purple").on("click", function () {
        // score += increment;
        // alert("New score: " + score);
        console.log("purple")
        console.log(purple1)
        score += purple1;
        checkWin();

    });

    $("#green").on("click", function () {
        // score += increment;
        // alert("New score: " + score);
        console.log("green")
        console.log(green1)
        score += green1;
        
        checkWin();
        
    });

   

   


});



