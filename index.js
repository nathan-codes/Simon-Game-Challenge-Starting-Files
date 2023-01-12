// Selecting the cubes
const blueCube = $("#blue");
const yellowCube = $("#yellow");
const greenCube = $("#green");
const redCube = $("#red");


//Cube Audio
const blueCubeAudio = new Audio("/sounds/blue.mp3");
const redCubeAudio = new Audio("/sounds/red.mp3");
const yellowCubeAudio = new Audio("/sounds/yellow.mp3");
const greenCubeAudio = new Audio("/sounds/green.mp3");



let randomNumber;
let newPattern = [];
const originalColors = ["red", "yellow", "blue", "green"];
let count = 1;


for (let i = 0; i <= 10; i++) {
    randomNumber = Math.floor(Math.random() * 3);
    newPattern.push(originalColors[randomNumber]);







}

console.log(newPattern);





// Starting the Game based on Any key that is pressed.
$(document).keypress(function ActionKey() {
    $("h1").text("Level " + count);

})





// program to display a text using setTimeout method



blueCube.click(function () {
    blueCubeAudio.play();
    blueCube.addClass("pressed");
    setTimeout(function () {
        blueCube.removeClass("pressed");
    }, 100)
});


yellowCube.click(function () {
    yellowCubeAudio.play();
    yellowCube.addClass("pressed");
    setTimeout(function () {
        yellowCube.removeClass("pressed");
    }, 100)
});



redCube.click(function () {
    redCubeAudio.play();
    redCube.addClass("pressed");
    setTimeout(function () {
        redCube.removeClass("pressed");
    }, 100)
});


greenCube.click(function () {
    greenCubeAudio.play();
    greenCube.addClass("pressed");
    setTimeout(function () {
        greenCube.removeClass("pressed");
    }, 100)
});

