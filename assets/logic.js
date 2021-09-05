
function Quiz(question, answerRight, answerWrong) {
    this.question = question;
    this.answerRight = answerRight;
    this.answerWrong = answerWrong;
}

// Question variable with answers initialized by Quiz function.
var first = new Quiz("How do we set a new unchanging variable in javascript?", "const", ["var", "set", "let"]);
var second = new Quiz("How do we access the target property of an event listener?", "event.target", ["listener.target", "property.target", "property(event)"]);
var third = new Quiz("Who invented javascript?", "Brendan Eich", ["Mark Zuckerberg", "Guido van Rossum", "Elon Musk"]);
var fourth = new Quiz("How long did it take Brendan Eich to invent javascript?", "10 days", ["10 weeks", "15 months", "10 years"]);
var fifth = new Quiz("How is javascript code executed inside the web browser?", "using a JIT compiler called V8", ["using your IDE debugger", "using the g++ compiler", "using the web browser console"]);

//  Array of all content with questions and answers
var Quiz = [first, second, third, fourth, fifth];

// Element variables

//  Timer and Buttons
var $timer = document.getElementById("timer");
var $viewHighBtn = document.getElementById("viewHighBtn");
var $beginBtn = document.getElementById("beginBtn");
var $submitBtn = document.getElementById("submitBtn");
var $backBtn = document.getElementById("backBtn");
var $clearBtn = document.getElementById("clearBtn");

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

//  Global variables
var timerVar;
var initialsVar;
var startTimer;
var iNum;
var randyNum;

function funcTimer() {
    if (timerVar < 1) {
        clearInterval(startTimer);
        $content.style.display = "none";
        $setHighScores.style.display = "block";
    }
    else {
        timerVar--;
        $timer.innerHTML = `${timerVar}`;
    }
}

function begin(event) {
    event.preventDefault();
    iNum = 0;
    randyNum = Math.floor(Math.random() * 4);
    timerVar = 60;
    $landing.style.display = "none";
    $content.style.display = "block";
    startTimer = setInterval(funcTimer, 1000);
    $question.textContent = Quiz[iNum].question;
    $answers[randyNum].textContent = Quiz[iNum].answerRight;
    let j = 0;
    for (let i = 0; i < $answers.length; i++) {
        if (i!==randyNum) {
            $answers[i].textContent = Quiz[0].answerWrong[j];
            j++;
        }
    }
}   

function viewHigh() {
    $landing.style.display = "none";
    $content.style.display = "none";
    $setHighScores.style.display = "none";
    $highScores.style.display = "block";
}

function hideFeedback () {
    $feedBack.style.display = "none";
}

function check(event) {
    if (Quiz[iNum].answerWrong.includes(event.target.innerHTML)){
        $feedBack.style.display = "block";
        $feedBack.innerHTML = "Wrong!";
        setTimeout(hideFeedback, 500);
        timerVar -= 5;
        $timer.textContent = `${timerVar}`;
    }
    else if (event.target.innerHTML.includes(Quiz[4].answerRight)) {
        clearInterval(startTimer);
        $content.style.display = "none";
        $setHighScores.style.display = "block";
    }
    else {
        iNum++;
        randyNum = Math.floor(Math.random() * 4);
        $feedBack.style.display = "block";
        $feedBack.innerHTML = "Correct!";
        setTimeout(hideFeedback, 500);
        $question.textContent = Quiz[iNum].question;
        $answers[randyNum].textContent = Quiz[iNum].answerRight;
        let j = 0;
        for (let i = 0; i < $answers.length; i++) {
            if (i!==randyNum) {
                $answers[i].textContent = Quiz[iNum].answerWrong[j];
                j++;
            }
        }
    }
}

function initials() {
    initialsVar = $initials.value;
    scoreVar = `${initialsVar} - ${timerVar}`;
    $setHighScores.style.display = "none";
    $highScores.style.display = "block";
    var $newScore = document.createElement("li");
    $newScore.textContent = scoreVar;
    $scores.appendChild($newScore);
    localStorage.setItem("score", scoreVar);
}

function goBack() {
    $highScores.style.display = "none";
    $landing.style.display = "block";
}

function clearHigh() {
    while ($scores.firstChild) {
        $scores.removeChild($scores.firstChild);
    }
}

$beginBtn.addEventListener("click", begin, event);
$viewHighBtn.addEventListener("click", viewHigh);

//  Quiz time!
for (let i=0; i<$answers.length; i++) {
    $answers[i].addEventListener("click", check, event);
}

$submitBtn.addEventListener("click", initials);
$backBtn.addEventListener("click", goBack);
$clearBtn.addEventListener("click", clearHigh);


















