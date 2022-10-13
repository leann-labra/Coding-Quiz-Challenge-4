//declared questions array
var questions= [
    {
        title: "In JavaScript, what element is used to store multiple values in a single variable?",
        choices: ["strings", "array", "list", "function"],
        answer: "arrays"
    },
    {
        title: "What is considered to be the most popular programming language in the world?",
        choices: ["JavaScript", "Swift", "HTML", "Python"],
        answer: "Javascript"
    },
    {
        title: "What kind of statement is used to execute actions based on a trigger or condition?",
        choices: ["regular expression", "boolean", "conditional statement", "all of the above"],
        answer: "conditional statement"
    },
    {
        title: "Which of the following includes Chrome's V8 JavaScript Engine?",
        choices: ["jQuery", "Java", "npm", "Node.js"],
        answer: "Node.js"
    },
    {
        title: "What is the correct syntax for referring to an external script called xxx.js?",
        choices: ["<script src=xxx.js>", "<script name='xxx.js'>", "<script href='xxx.js'>", "<script src='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    }

];


//declared variables for game timer and score keepnig
var questionsIndex = 0;
var score = 0;
var secondsLeft = 30;
var penalty = 10;


// variables to reference DOM elements 
var startBtn = document.querySelector("#startBtn");
var timer = document.querySelector("#timer");

var quizContent = document.querySelector("#quiz-content");
var WoR = document.querySelector("#WoR");
var choiceBtn = documentl.querySelector("#choices");

var scoreReveal = document.querySelector("#score");

// declared timer variable
var timer = setInterval(removeSecond, 1000); 

var setInterval= function (secondsLeft() {
    secondsLeft--;
    timer.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
    clearInterval(timerInterval);
    alert("ran out of time sorry :(");};

    }, 1000);//with setInterval function


//when startbtn is clicked, timer countdown begins and questions are shown{
function beginQuiz() {
    //title page is hidden once start is clicked
    document.getElementById("titlePage").style.display="none";
    document.getElementById("quiz-content").style.display="block";
    //questions are revealed
    showQuestions(); 
}

//globally declared variables to use to represent array of question titles and question choices for following function
var qTitle= questions[questionsIndex].title;
var qTitleEl = document.querySelector("#questionTitle");
var qchoices = questions[questionsIndex].choices;

//function to extract questions written in questions object array
function showQuestions() {

    //displays current question in a for loop
    for (var i=0; i < questions.length; i++ ) {
        qTitleEl.textContent=qTitle.title; 
    }
    //clear any previous question choices
    qchoices.innterHTML = "";

    // qchoices = document.querySelector("#choices");

    // creates a new button for each choice
    qTitle.choices.forEach( function(choice, i) {
    
        //for each button, it will have a value of choice
       var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("id", "choices");
        choiceBtn.setAttribute("value", qchoices);

        choiceBtn.textContent = i + "." + qchoices;

         // display on the page and append after last answer choice
         qchoices.appendChild(choiceBtn);
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

startBtn.addEventListener("click", beginQuiz());
