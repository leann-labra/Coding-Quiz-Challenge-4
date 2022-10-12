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


//declared variables for game
var questionsIndex = 0;
var score = 0;

var secondsLeft = 30;
var penalty = 10;


// variables to reference DOM elements 
var startBtn = document.querySelector(".startBtn");
var timer = document.querySelector("#timer");
var question = document.querySelector("#question");
var choiceList = document.querySelector("#choices");
var quizContent = document.querySelector("#quiz-content");
var WoR = document.querySelector("#WoR");

var scoreReveal = document.querySelector("#score");

//timer 
startBtn.addEventListener("click", function timerCountdown() {

    var timerInterval = setInterval( function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("ran out of time sorry :(");};

        }, 1000);//with setInterval function
    
    document.getElementById("titlePage").style.display="none";
    console.log(document);
    
    showQuestions(); 

    },
  );

 function showQuestions() {

   //reveal question taken from question index
   for (var i=0; i <questions.length; i++) {
   
   var questionShown = questions[questionsIndex].title;
   var questionChoices =questions[questionsIndex].choices;
   question.textContent = questionShown;
   choiceList.textContent = questionChoices;
   
    //checking to see if Array can be recalled from global object
        //  console.log(questionShown);
        //  console.log(questionChoices);

    // creates a new button for each choice
    questionsIndex.choiceList.forEach(function(choice, i) {
    
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);

        choiceBtn.textContent = i + choice;

         // display on the page
         choiceList.appendChild(choiceBtn);
        // attach click event listener to each choice
        choiceBtn.onclick = clickedQuestion;
     });
    } //curly bracket from for loop
 
//now, I need to make a function for the clicked question to determine whether or not it is correct
    var clickedQuestion = function clickedQuestion() {

    if(clickedQuestion.value !== questions[questionsIndex].answer) {
        //penalty suffered
        secondsLeft = secondsLeft - penalty;
        WoR.textContent = "Wrong :( The correct answer " + "questions[questionsIndex].answer";
    } else {
        WoR.textContent= "Correct! You know your stuff!";
        score = score + 10;
    };
    };

    //go to length of index until at the end
    questionsIndex++;

    if (questionsIndex === questions.length) {
        finishQuiz();
    };

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