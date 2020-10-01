//Variables Created here
var welcomeDiv = document.getElementById("welcome");
var start = document.getElementById("startButton")
var questions = document.getElementById("codeQuestions");
var answersSelectionOne = document.getElementById("codeAnswers");
var answersSelectionTwo = document.getElementById("codeAnswersTwo");
var answersSelectionThree = document.getElementById("codeAnswersThree");
var answersSelectionFour = document.getElementById("codeAnswersFour");
var answersSelectionFive = document.getElementById("codeAnswersFive")
var scoreCounter = document.getElementById("score");  
var finishedText = document.getElementById("finished");
var endScreenEl = document.getElementById("endScreen");
var submitBtn = document.getElementById("submitScore");
var inputInitials = document.getElementById("initials");
var newPage = document.getElementById("newPage");
var newContentOne = document.getElementById("showScoreHere");
var starterScore = 100;
var t;
//------------------------------------------------------------------------------------------------------------------------------
//Score count function:

function scoreTimer(){
    var timeInterval = setInterval(function (){
    starterScore--;
    scoreCounter.textContent = "Score: " + starterScore;

    if (starterScore === 0){
        clearInterval(timeInterval);
        questions.style.display="none";
        answersSelectionOne.style.display="none";
        answersSelectionTwo.style.display="none";
        answersSelectionThree.style.display="none";
        answersSelectionFour.style.display="none";
        answersSelectionFive.style.display="none";
        var doneText = document.getElementById("finished").textContent = "All Done!";
        var finalScoreText = document.getElementById("finalScores").textContent = "Your final score is " + starterScore; 
       finalScreen();
        
    }
  }, 1000);
}
//------------------------------------------------------------------------------------------------------------------------------
//Functions created here for my Questions.
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
    questions.textContent = "Inside which HTML element do we put the JavaScript?";
    var answersThree = ["<javascript>", "<scripting>", "<js>", "<script>"];
    for (var i = 0; i < answersThree.length; i++){
        var buttonsThree = document.createElement("button");
        buttonsThree.textContent = answersThree[i];
        buttonsThree.setAttribute("style", "color: black");
        buttonsThree.setAttribute("data-value", answersThree[i]);
        answersSelectionThree.append(buttonsThree);
    } 
 }

 function questionFour(){
    questions.textContent = "How do you write 'Hello World' in an alert box?";
    var answersFour = ["msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');"];
    for (var i = 0; i < answersFour.length; i++){
        var buttonsFour = document.createElement("button");
        buttonsFour.textContent = answersFour[i];
        buttonsFour.setAttribute("style", "color: black");
        buttonsFour.setAttribute("data-value", answersFour[i]);
        answersSelectionFour.append(buttonsFour);
    } 
 }

 function questionFive(){
    questions.textContent = "How do you create a function in JavaScript?";
    var answersFive = ["function myFunction()", "function:myFunction()", "function = myFunction"];
    for (var i = 0; i < answersFive.length; i++){
        var buttonsFive = document.createElement("button");
        buttonsFive.textContent = answersFive[i];
        buttonsFive.setAttribute("style", "color: black");
        buttonsFive.setAttribute("data-value", answersFive[i]);
        answersSelectionFive.append(buttonsFive);
    } 
 } 

 function store() {
    var inputInitial=document.getElementById("initials");
    localStorage.setItem("initials", inputInitial.value);
    localStorage.setItem("Score", starterScore);
    localStorage.getItem(starterScore);
  }

//-----------------------------------------------------------------------------------------------------------------------------------------------
//Event Listener to start Quiz
start.addEventListener("click", function(){
    welcomeDiv.style.display="none";
    scoreCounter.textContent="Score: " + 100;
    questionOne();
    scoreTimer();
})
//-----------------------------------------------------------------------------------------------------------------------------------------------
// Event listeners for the answer selections
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

answersSelectionFour.addEventListener("click", function (event){
    if (event.target.matches("button")){
        var selectedButton = event.target.getAttribute("data-value");
         if (selectedButton === "alert('Hello World');"){
             answersSelectionFour.style.display="none";
             questionFive();
         }
         else{
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            answersSelectionFour.style.display="none";
            questionFive();
         }
    }
})

answersSelectionFive.addEventListener("click", function(event){
    if (event.target.matches("button")){
        var selectedButton = event.target.getAttribute("data-value");
        if (selectedButton === "function myFunction()"){
            answersSelectionFive.style.display="none";
           finalScreen();
           stopCount();
        }
        else{
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            starterScore--
            answersSelectionFive.style.display="none";
            questions.style.display="none";
            var doneText = document.getElementById("finished").textContent = "All Done!";
            var finalScoreText = document.getElementById("finalScore").textContent = "Your final score is " + starterScore;  
            scoreCounter.style.display="none";
           finalScreen();
            stopCount();
        }
    }
})

//------------------------------------------------------------------------------------------------------------------------------------------------

function finalScreen(){
    endScreenEl.style.display="flex";
}

function stopCount(){
    clearTimeout(t);
    starterScore = starterScore;
    ;
}