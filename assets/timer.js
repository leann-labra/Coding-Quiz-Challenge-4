//timer variables and functions 
var secondsLeft = 30;
var penalty = 10;


var timer = () => {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("ran out of time sorry :(");
    };
};

var timerInterval = setInterval(timer, 1000);

function timerComplete () {
    timerInterval--;
}

// console.log(timerInterval);