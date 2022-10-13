//declared var for questions on separate js
//declared variables for timer is on separate js

var questionsIndex = 0;
var score = 0;


// variables to reference DOM elements 
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
//variables for quiz content
var quizContent = document.querySelector("#quiz-content");
var currentqEl  = document.querySelector("#currentQuestion");
var choicesEl = document.querySelector("#choices");

var choiceBtnEl = documentl.querySelector("#choices");
var WoR = document.querySelector("#WoR");
//variables for highscore stuff
var scoreReveal = document.querySelector("#score");


//when startbtn is clicked, timer countdown begins and questions are shown
function startQuiz() {
    timerComplete ();
    showQuestions(); 
    //title page is hidden once start is clicked
    document.getElementById("titlePage").style.display="none";
    document.getElementById("quizContent").style.display="block";
};

startBtn.addEventListener("click", startQuiz());

//function to extract questions written in questions object array
function showQuestions() {

    //displays current question in a for loop
    for (var i=0; i < questions.length; i++ ) {
        currentqEl.textContent=currentQuestion; 
    }
    //clear any previous question choices
        choicesEl.innterHTML = "";

    // creates a new button for each choice
    currentQuestion.choices.forEach( function(choice, i) {
    
        //for each button, it will have a value of choice
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("id", "choices");
        choiceBtn.setAttribute("value", qchoices);

        choiceBtn.textContent = i + 1 + "." + qchoices;

         // display on the page and append after last answer choice
         qchoices.appendChild(choiceBtnEl);
        // attach click event listener to each choice
         choiceBtn.onclick = clickedAnswer;
     });
     //curly bracket from for loop
 
//clicked choice screening
    var clickedAnswer = function clickedChoice() {

    if(clickedAnswer !== questions[questionsIndex].answer) {
        //penalty suffered
        secondsLeft = secondsLeft - penalty;
        WoR.textContent = "Wrong :( The correct answer " + "questions[questionsIndex].answer";
    } else {
        WoR.textContent= "Correct! You know your stuff!";
        score.textContent = score + 10;
    };
    //go to length of index until at the end
    questionsIndex++;

    //when questions run out, the function for finishing the quiz is triggered
    if (questionsIndex === questions.length) {
        finishQuiz();
     };
    }; //end of for loop.. hopefully
 };

function finishQuiz() {
    clearInterval(timerInterval);
    scoreReveal.textContent = score;
    scoreReveal.getElementId("hallOfFame").style.display="block";

    var next = document.createElement('button');
    next.onclick = saveHighscore();

};


var revealHallOfFame = document.querySelector("#hallOfFame");

function saveHighscore() {
    var submitBtn = document.querySelector("#submit");
    submitBtn.onclick = localStorage.getItem();
}

//event listeners

// startBtn.addEventListener("click", beginQuiz());

