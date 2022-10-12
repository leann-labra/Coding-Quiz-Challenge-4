var time = document.querySelector("#time");
var alertPopUp = document.querySelector("#alert");
var startBtn = document.querySelector(".start",true);
var revealQ = document.querySelector("#revealQ");

var correctAnswer = document.querySelector(".correct");
var correct = true;

var secondsLeft = 30; 

//start button begins timer and hides intro upon click
startBtn.addEventListener ("click", function timerCountdown () {
    
    document.getElementById("intro").style.display="none";

    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("ran out of time sorry :(");};

        //attempt at adding 2 seconds to seconds left everytime correct is clicked

    }, 1000);
        
        }
  );

  var firstqReveal = document.querySelector("#firstq");

//at start button questions are also revealed
startBtn.addEventListener("click", function revealQ () {
   document.getElementById("revealq").style.display="block";

});

var answer = document.querySelector(".answer");

answer.addEventListener("click", function revealCorrect () {
    if ("click" === correctAnswer) {
        document.getElementById("correctA").style.display="block";
        //document.getElementById("secondq").style.display="block";
        document.getElementById("firstq").style.display="none";
        
    } else {
        document.getElementById("wrongA").style.display="block";
       // document.getElementById("secondq").style.display="block";
        //document.getElementById("firstq").style.display="none";
        secondsLeft-2;
        return;
    };
});



// var score = localStorage.getItem("score");
// var highScore = document.querySelector("#highScore");

// correctAnswer.addEventListner ("click", function correct () {
//     document.getElementsByClassName("correct").style.backgroundColor="light-salmon";
//     document.getElementByClassName("correctA").style.display="block";
//     localStorage.setItem("score", highScore);

// }

// )



  // if (correct == true) {
    //     firstq.currentTarget.setAttribute(
    //         "style",
    //         "background-color: light-salmon"
    //       );
    //      };
    //     };

// add timer with if questions //
//separate functions that shows questions, and then reveals right answer 
//add event listener last to show each questions, and subtracts time from each correct answer 

    

    //add an alert button to appear when timer runs out