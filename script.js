var welcomeDiv = document.getElementById("welcome");
var start = document.getElementById("startButton")
var questions = document.getElementById("codeQuestions");
var answers = document.getElementById("codeAnswers");
var scoreCounter = document.getElementById("score");  


start.addEventListener("click", function(){
    welcomeDiv.style.display="none";
    scoreCounter.textContent="Score: " + 60;
})

