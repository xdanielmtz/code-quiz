var welcomeDiv = document.getElementById("welcome");
var start = document.getElementById("startButton")
var questions = document.getElementById("codeQuestions");
var answersSelectionOne = document.getElementById("codeAnswers");
var answersSelectionTwo = document.getElementById("codeAnswersTwo");
var answersSelectionThree = document.getElementById("codeAnswersThree");

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
    var answersOne = ["<title>", "<body>", "<head>", "<br>"];
    for (var i = 0; i < answersOne.length; i++){
        var buttonsOne = document.createElement("button");
        buttonsOne.textContent = answersOne[i];
        buttonsOne.setAttribute("style", "color: black");
        buttonsOne.setAttribute("data-value", answersOne[i]);
        answersSelectionOne.append(buttonsOne);

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
        answersSelectionTwo.append(buttonsTwo);

    }
 }



 function questionThree(){
    questions.textContent = "Inside which HTML element do we put the JavaScript?"
    var answersThree = ["<javascript>", "<scripting>", "<js>", "<script>"];
    for (var i = 0; i < answersThree.length; i++){
        var buttonsThree = document.createElement("button");
        buttonsThree.textContent = answersThree[i];
        buttonsThree.setAttribute("style", "color: black");
        buttonsThree.setAttribute("data-value", answersThree[i]);
        answersSelectionThree.append(buttonsThree);
    } 
 }




answersSelectionOne.addEventListener("click", function (event){
    if (event.target.matches("button")){
        var selectedButton = event.target.getAttribute("data-value");
        if (selectedButton === "<title>") {
            answersSelectionOne.style.display="none";
            questionTwo();
        }
        else{
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            answersSelectionOne.style.display="none";
            questionTwo();
        }
    }
});

answersSelectionTwo.addEventListener("click", function (event){
    if (event.target.matches("button")){
        var selectedButton = event.target.getAttribute("data-value");
            if (selectedButton === "Cascading Style Sheets"){
                answersSelectionTwo.style.display="none";
                questionThree();
            }
            else{
                starterScore--
                starterScore--
                starterScore--
                starterScore--
                starterScore--
                answersSelectionTwo.style.display="none";
                questionThree();
            }
    }
})

answersSelectionThree.addEventListener("click", function (event){
    if (event.target.matches("button")){
        var selectedButton = event.target.getAttribute("data-value");
         if (selectedButton === "<script>"){
             answersSelectionThree.style.display="none";
             questionFour();
         }
         else{
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            answersSelectionThree.style.display="none";
            questionFour();
         }
    }
})










function scoreTimer(){
    var timeInterval = setInterval(function (){
    starterScore--;
    scoreCounter.textContent = "Score: " + starterScore;

    if (starterScore === 0){
        clearInterval(timeInterval);
    }
  }, 1000);
}