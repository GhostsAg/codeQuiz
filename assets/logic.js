
function Quiz(question, answerRight, answerWrong) {
    this.question = question;
    this.answerRight = answerRight;
    this.answerWrong = answerWrong;
}

// Question variable with answers initialized by Quiz function.
var first = new Quiz("How do we set a new unchanging variable in javascript?", "const", ["var", "set", "let"]);
var second = new Quiz("How do we access the target property of an event listener?", "event.target", ["listener.target", "property.target", "property(event)"]);
var third = new Quiz("Who invented javascript?", "Brendan Eich", ["Mark Zuckerberg", "Guido van Rossum", "Elon Musk"]);
var fourth = new Quiz("How long did it take Brendan Eich to invent javascript?", "10 days", ["10 weeks", "10 months", "10 years"]);
var five = new Quiz("How is javascript code executed inside the web browser?", "using a JIT compiler called V8", ["using your IDE debugger", "using the g++ compiler", "using the web browser console"]);

// Element variables

//  Timer and Buttons
var $timer = document.getElementById("timer");
var $viewHighBtn = document.getElementById("viewHighBtn");
var $beginBtn = document.getElementById("beginBtn");
var $submitBtn = document.getElementById("submitBtn");

// Landing Page
var $landing = document.getElementById("landing");

//  Questions Page
var $content = document.getElementById("content");
var $question = document.getElementById("question");
var $answers = document.querySelectorAll("li");
var $feedBack = document.getElementById("feedBack");

//  Set high scores page (initials)
var $setHighScores = document.getElementById("setHighScores");
var $initials = document.getElementById("initials");

// View high scores page
var $highScores = document.getElementById("highScores");
var $scores = document.getElementById("scores");









