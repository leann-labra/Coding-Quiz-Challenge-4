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

var highscoreReveal = document.querySelector("#highscore");

//timer 
startBtn.addEventListener("click", function timerCountdown() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("ran out of time sorry :(");};

        }, 1000);//with setInterval function
        
    document.getElementById("titlePage").style.display="none";
   
    showQuestions();//not defined? why
     },
   
  );

function showQuestions() {

   //reveal question taken from question index
   for (var i=0; i <questions.length; i++) {
   
   var questionShown = questions[questionsIndex].title;
   var questionChoices =questions[questionsIndex].choices;
   question.textContent = questionShown;
   choices.textContent = questionChoices;

//    console.log(questionShown);
//    console.log(questionChoices);

    question.choices.forEach(function(choice, i) {
    // creates a new button for each choice
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceBtn.onclick = clickedQuestion;

    // display on the page
    choiceList.appendChild(choiceBtn);
  });
   }
} 


//now, I need to make a function for the clicked question to determine whether or not it is correct
var clickedQuestion = function clickedQuestion() {

if(this.value !== questions[questionsIndex].answer) {
    //penalty suffered
    secondsLeft= secondsLeft - penalty;
    WoR.textContent = "Wrong :( The correct answer " + "questions[questionsIndex].answer";
} else {
    WoR.textContent= "Correct!";
    score + 10;
};
}

questionsIndex++;

if (questionsIndex === questions.legnth) {
    finishQuiz();
}

function finishQuiz();
    clearInterval(timerInterval);

    highscoreReveal.textContent = score;
    