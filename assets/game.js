//declared var for questions on separate js
//declared variables for timer is on separate js

var questionsIndex = 0;
var score = 0;


// variables to reference DOM elements 
var startBtn = document.querySelector("#startBtn");
// console.log(startBtn);
//variables for quiz content
var quizContent = document.querySelector("#quiz-content");
var currentqEl  = document.querySelector("#currentQuestion");
var choicesEl = document.querySelector("#choices");

var choiceBtnEl = document.querySelector("#choices");
var WoR = document.querySelector("#WoR");

//variables for highscore stuff
var scoreReveal = document.querySelector("#score");
var submitBtn = document.querySelector("#submit");


//when startbtn is clicked, timer countdown begins and questions are shown
function startQuiz() {
    timerComplete ();
    showQuestions(); 
    //title page is hidden once start is clicked
    document.getElementById("titlePage").style.display="none";
    document.getElementById("quizContent").style.display="block";
};

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
        choiceBtn.setAttribute("id", "choices"); //#choices style in css
        choiceBtn.setAttribute("value", qchoices);

        choiceBtn.textContent = i + 1 + "." + qchoices;

         // display on the page and append after last answer choice
         qchoices.appendChild(choiceBtnEl);
        // attach click event listener to each choice
         choiceBtn.onclick = clickedAnswer;
     });
     //curly bracket from for loop
 
//clicked choice screening whether wrong or right 
    let clickedAnswer = function clickedChoice() {
        
    if(clickedAnswer !== correct) {
        //penalty suffered
        secondsLeft = secondsLeft - penalty;
        //displays right or wrong answer 
        WoR.textContent = "Wrong :( The correct answer " + correct;
    } else {
        WoR.textContent= "Correct! You know your stuff!";
        score.textContent = score + 10;
    }
    //go to length of index until at the end
    questionsIndex++;
    //when questions run out, the function for finishing the quiz is triggered
    if (questionsIndex === questions.length) {
        finishQuiz();
     };
    }; //end of for loop.. hopefully..i think
 };

function finishQuiz() {
    clearInterval(timerInterval);
    scoreReveal.textContent = score;
    scoreReveal.getElementId("hallOfFame").style.display="block";
    var next = document.createElement('button');
    //hits next to finish quiz and then reveal score board
    next.addEventListener("click", finishQuiz);
};
    console.log(finishQuiz);
//reveals scoreboard 
var revealHallOfFame = function saveHighscore() {
    //storing initials info
    localStorage.setItem("text");
};
    console.log(revealHallOfFame);

function showFinalScore() {
    //retrieving info of stored in declared variable
    window.localStorage.getItem(scoreReveal)
    document.getElementById("hallofFame").style.display="none";
};

//event listener not working :(
startBtn.addEventListener("click", startQuiz);
//when submit button is clicked then highscore is saved
submitBtn.addEventListener("click", revealHallOfFame);

