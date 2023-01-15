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
   

}










    









// Starting the Game based on Any key that is pressed.
$(document).keypress(function () {
    $("h1").text("Level " + count);
    newSequence();

})
    
  
    
 

    $(".btn").on("click", function (event) {
        let clickedColor = event.target.id;
        userSelectedColors.push(event.target.id);
    })

   

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
}



$(".btn").on("click", function (event) { 
    playSound(event.target.id);

 })
 