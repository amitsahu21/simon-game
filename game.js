
var started=false;


var gamePattern=[];
var userClickedPattern=[];
var randomChosenColour;
var buttonColours=["red", "blue", "green", "yellow"];
var level=0;


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

function wrongInput(){
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
        }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}
function startOver(){
    level = 0;
    gamePattern = [];
    started=false;
}
function animatePress(currentColour){
        $("#"+currentColour).addClass("pressed");
        setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
        }, 100);
    }

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else wrongInput();

}

function nextSequence(){
    userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    level++;
    $("h1").text("Level "+level);
    
 }
 $(document).keydown(function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }

})
$(".btn").click(function(){

    var userClickedColour=$(this).attr("id");
    userClickedPattern.push(userClickedColour);
    animatePress(userClickedColour);
    playSound(userClickedColour);
    checkAnswer(userClickedPattern.length-1);
})

  


    


 
 





































