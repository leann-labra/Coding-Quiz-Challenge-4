// separated questions in a separate js to make game js look neater 

var questions= [
    {
        current: "In JavaScript, what element is used to store multiple values in a single variable?",
        choices: ["strings", "array", "list", "function"],
        answer: "arrays"
    },
    {
        current: "What is considered to be the most popular programming language in the world?",
        choices: ["JavaScript", "Swift", "HTML", "Python"],
        answer: "Javascript"
    },
    {
        current: "What kind of statement is used to execute actions based on a trigger or condition?",
        choices: ["regular expression", "boolean", "conditional statement", "all of the above"],
        answer: "conditional statement"
    },
    {
        current: "Which of the following includes Chrome's V8 JavaScript Engine?",
        choices: ["jQuery", "Java", "npm", "Node.js"],
        answer: "Node.js"
    },
    {
        current: "What is the correct syntax for referring to an external script called xxx.js?",
        choices: ["<script src=xxx.js>", "<script name='xxx.js'>", "<script href='xxx.js'>", "<script src='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    }

]
//trying to declare questionsIndex?
var qustionsIndex = questions.[""];
var currentQuestion = questions[questionsIndex].current;
    console.log(questionsIndex);
var qchoices = questions[questionsIndex].choices;
var correct = questions[questionsIndex].answer;