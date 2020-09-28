var welcomeDiv = document.getElementById("welcome");
var start = document.getElementById("startButton")
var questions = document.getElementById("codeQuestions");
var answers = document.getElementById("codeAnswers");
var answersDos = document.getElementById("codeAnswersTwo")
var scoreCounter = document.getElementById("score");  
var starterScore = 60;

start.addEventListener("click", function(){
    welcomeDiv.style.display="none";
    scoreCounter.textContent="Score: " + 60;
    questionOne();
    scoreTimer();
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

function questionTwo(){
    questions.textContent = "What does CSS stand for?";
    var answersTwo = ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"];
    for (var i = 0; i < answersTwo.length; i++){
        var buttonsTwo = document.createElement("button");
        buttonsTwo.textContent = answersTwo[i];
        buttonsTwo.setAttribute("style", "color: black");
        buttonsTwo.setAttribute("data-value", answersTwo[i]);
        answersDos.append(buttonsTwo);

    }
}

answers.addEventListener("click", function (event){
    if (event.target.matches("button")){
        var selectedButton = event.target.getAttribute("data-value");
        if (selectedButton === "Title") {
            answers.style.display="none";
            questionTwo();
        }
        else{
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            starterScore--
        }
    }
});




function scoreTimer(){
    var timeInterval = setInterval(function (){
    starterScore--;
    scoreCounter.textContent = "Score: " + starterScore;

    if (starterScore === 0){
        clearInterval(timeInterval);
    }
  }, 1000);
}