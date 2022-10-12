var time = document.querySelector("#time");
var alertPopUp = document.querySelector("#alert");
var startBtn = document.querySelector(".start");


var correctAnswer = document.querySelector(".correct")
var correct = true;

var secondsLeft = 30; 

//start button begins timer and hides intro upon click
startBtn.addEventListener("click", function timerCountdown () {
    
    document.getElementById("intro").style.display="none";
    
    // if (correct == true) {
    //     firstq.currentTarget.setAttribute(
    //         "style",
    //         "background-color: light-salmon"
    //       );
    //      };
    //     };

// firstq.addEventListener("click", displayq);
    
    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("ran out of time sorry :(");}

        //attempt at adding 2 seconds to seconds left everytime correct is clicked
        if (correct == false) {
        secondsLeft+2; 
        };

         }, 1000);
        
        },
);



// var score = localStorage.getItem("score");
// var highScore = document.querySelector("#highScore");

// correctAnswer.addEventListner ("click", function correct () {
//     document.getElementsByClassName("correct").style.backgroundColor="light-salmon";
//     document.getElementByClassName("correctA").style.display="block";
//     localStorage.setItem("score", highScore);

// }

// )





// add timer with if questions //
//separate functions that shows questions, and then reveals right answer 
//add event listener last to show each questions, and subtracts time from each correct answer 

    

    //add an alert button to appear when timer runs out