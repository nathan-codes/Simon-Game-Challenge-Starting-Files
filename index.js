// Selecting the cubes
const blueCube = $("#blue");
const yellowCube = $("#yellow");
const greenCube = $("#green");
const redCube = $("#red");


//Game Audios
const blueCubeAudio = new Audio("/sounds/blue.mp3");
const redCubeAudio = new Audio("/sounds/red.mp3");
const yellowCubeAudio = new Audio("/sounds/yellow.mp3");
const greenCubeAudio = new Audio("/sounds/green.mp3");
const gameOverAudio = new Audio("/sounds/wrong.mp3");


const originalColors = ["red", "blue", "yellow", "green"];
let randomNumber;
let newPattern = [];
let userSelectedColors = [];
let count = 1;


function newSequence() {

    randomNumber = Math.floor(Math.random() * 4);
    let randomColor = originalColors[randomNumber];

    $("#" + randomColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomColor);

    //Storing the new pattern 
    newPattern.push(randomColor);
    return newPattern;
}





// Starting the Game based on Any key that is pressed.
$(document).keypress(function () {
    $("h1").text("Level " + count);

    newSequence();

    $(".btn").on("click", function (event) {
        let clickedColor = event.target.id;
        userSelectedColors.push(clickedColor);


        if (userSelectedColors[0] !== newSequence()[0]) {
            gameOver();

        }
    })










})




// Get users Click choice




// if (userSelectedColors[0] === newPattern[0]) {
//     count++;
//     $("h1").text("Same");
//     console.log("True");
// }



// program to display a text using setTimeout method









function playSound(activeButton) {

    switch (activeButton) {
        case "red":
            redCubeAudio.play();

            break;
        case "blue":
            blueCubeAudio.play();
            break;
        case "yellow":
            yellowCubeAudio.play();
            break;
        case "green":
            greenCubeAudio.play();
            break;

        default:
            break;
    }
    $("#" + activeButton).addClass("pressed");
    setTimeout(function removeClicedAnimation() {
        $("#" + activeButton).removeClass("pressed");
    }, 100);
}



$(".btn").on("click", function (event) {
    playSound(event.target.id);
})




function gameOver() {

    $("body").addClass("red");
    gameOverAudio.play();
    $("h1").text("Game Over, Press Any Key to Restart")

    setTimeout(function () {
        $("body").removeClass("red");
    }, 100);

}