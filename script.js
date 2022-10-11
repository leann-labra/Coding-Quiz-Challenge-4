var time = document.querySelector("#time");
var alertPopUp = document.querySelector("#alert");
var startBtn = document.querySelector("#start");

var secondsLeft = 30; 


startBtn.addEventListener ('click', function timerCountdown () {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        time.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("ran out of time sorry :(");}
    
         }, 
         
         1000);
        
        },
    )

         

    

    //add an alert button to appear when timer runs out