var welcomeDiv = document.getElementById("welcome");
var start = document.getElementById("startButton")
var questions = document.getElementById("codeQuestions");
var answers = document.getElementById("codeAnswers");
var scoreCounter = document.getElementById("score");  
var starterScore = 60;

start.addEventListener("click", function(){
    welcomeDiv.style.display="none";
    scoreCounter.textContent="Score: " + 60;
    questionOne();
})

function questionOne(){
    questions.textContent = "What tag is required in all HTML documents, and is used to define the title?";
    var answersOne = ["Title", "Body", "Head", "Br"];
    for (var i = 0; i < answersOne.length; i++){
        var buttonsOne = document.createElement("button");
        buttonsOne.textContent = answersOne[i];
        buttonsOne.setAttribute("style", "color: black");
        buttonsOne.setAttribute("data-value", answersOne[i]);
        answers.append(buttonsOne);

    }
}