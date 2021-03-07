//////////////////////////////////////////////Declerations//////////////////////////////////////////////
var correctAnswer;
var wrongAnswer;
var nextQues = 0;
var timer = 61;
var startButton = document.getElementById("start");
var description = document.getElementById("content");
var optionsDisplay = document.getElementById("options");
var myTitle = document.getElementById("title");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var clear = document.getElementById("clear");
var playAgainButton = document.getElementById("playAgain");
var highScoreButtons = document.getElementById("highScorePage");
var highScoreChart = document.getElementById("highScoreChart");
var timeNav = document.getElementById("time-nav");
var highscoreNav = document.getElementById("high-nav");
var myValue;
//////////////////////////////////////////////Event-Listeners//////////////////////////////////////////////
option1.addEventListener("click", clicked);
option2.addEventListener("click", clicked);
option3.addEventListener("click", clicked);
option4.addEventListener("click", clicked);
highscoreNav.addEventListener("click", viewHighScore);
//////////////////////////////////////////////High-Score-Viewer//////////////////////////////////////////////
function viewHighScore(){
    myTitle.innerHTML = "HighScores";
    description.style.display = "none";
    option1.style.display = "none"; 
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    startButton.style.display = "block";
}
//////////////////////////////////////////////Timer//////////////////////////////////////////////
function countDown() {
    timer = 61;
    var timerInterval = setInterval(function() {
        timer--;
        timeNav.innerHTML = "Time: " + timer;
        if(timer === 0 || nextQues === 8) {
            clearInterval(timerInterval);
        }
        if(timer <= 0) {
            clearInterval(timerInterval);
            yourScore();
        }
        if(timer < 0) {
            alert("Congrats! You Reached Negative!")
        }
    }, 1000);
}
//////////////////////////////////////////////High-Score-Input//////////////////////////////////////////////
function myForm() {
    var x = document.createElement("div");
    x.setAttribute("id", "myF");
    description.appendChild(x);
    var y = document.createElement("input");
    //////////////////////////////////////////////
    y.setAttribute("type", "text");
    y.style.margin = "2%";
    y.style.padding = "2%";
    document.getElementById("myF").appendChild(y);
    //////////////////////////////////////////////
    var q = document.createElement("button");
    q.onclick = submitInput;
    q.innerHTML = "Click to continue...";
    q.style.padding = "1%";
    q.style.marginTop = "5%";
    q.style.fontSize = "18px";
    description.appendChild(q);
    //////////////////////////////////////////////
    function submitInput() {
        myValue = y.value;
        if (myValue) {
            localStorage.setItem(myValue, timer);
        }
        highScoreButtons.style.marginTop = "-15%";
        highScore();
    }
}
//////////////////////////////////////////////High-Score-Viewer//////////////////////////////////////////////
function highScore() {
    myTitle.innerHTML = "HighScores"
    description.style.display = "none";
    highScoreButtons.style.display = "block";
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        highScoreChart.innerHTML += key + ": " + value + "<br>";
    }
}
//////////////////////////////////////////////Clear-High-Score//////////////////////////////////////////////
function clearScore() {
    highScoreChart.innerHTML = "";
    localStorage.clear();
    highScoreButtons.style.marginTop = "15%";
}
//////////////////////////////////////////////Play-Again-Repeater//////////////////////////////////////////////
function playAgain() {
    highScoreButtons.style.display = "none";
    startButton.style.display = "block";
    description.style.display = "block";
    myTitle.innerHTML = "Coding Quiz Challenge";
    description.innerHTML = "Can you answer all the following questions in 60 seconds?<br>Wrong answers will take 10 seconds from the timer.<br>Do you want to continue...";
    nextQues = 0;
    timeNav.innerHTML = "Time: 60";
}
//////////////////////////////////////////////Question-Controller//////////////////////////////////////////////
function clicked(e) {
    nextQues++;
    console.log(nextQues);
    var selectedAnswer = e.target;
    function compareAnswer() {
        if (selectedAnswer === correctAnswer) {
            alert("✔️CORRECT ANSWER✔️");
        } else {
            alert("❌WRONG ANSWER❌");
            timer = timer - 10;
        }
    }
    if (nextQues === 1) {
        compareAnswer();
        ques2();
    }else if (nextQues === 2) {
       compareAnswer();
        ques3();
    }else if (nextQues === 3) {
       compareAnswer();
        ques4();
    }else if (nextQues === 4) {
       compareAnswer();
        ques5();
    }else if (nextQues === 5) {
       compareAnswer();
        ques6();
    }else if (nextQues === 6) {
       compareAnswer();
        ques7();
    }else if (nextQues === 7) {
       compareAnswer();
        ques8();
    }else if (nextQues === 8) {
       compareAnswer();
        yourScore();
    }
}
//////////////////////////////////////////////Score-Calculator//////////////////////////////////////////////
function yourScore(){
    if (timer === 0 || timer < 0) {
        myTitle.innerHTML = "Your Score is: " + timer;
    } else {
        myTitle.innerHTML = "Your Score is: " + timer;
    }
    option1.style.display = "none"; 
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    description.style.display = "block";
    description.innerHTML = "Enter your initials";
    myForm();
}
//////////////////////////////////////////////Quiz-Starter//////////////////////////////////////////////
function startQuiz() {
    startButton.style.display = "none";
    description.style.display = "none";
    optionsDisplay.style.display = "block";
    countDown();
    ques1();
}
//////////////////////////////////////////////Questions//////////////////////////////////////////////
function ques1() {
    correctAnswer = option2;
    myTitle.innerHTML = "What kind of brackets do arrays use?";    
    option1.innerHTML = "Curly brackets"; 
    option2.innerHTML = "Square brackets"; 
    option3.innerHTML = "Paranthesis";
    option4.innerHTML = "Quotes";
    option1.style.display = "inline-Block"
    option2.style.display = "inline-Block"
    option3.style.display = "inline-Block"
    option4.style.display = "inline-Block"
}
function ques2() {
    correctAnswer = option3;
    myTitle.innerHTML = "How do you create boilerplate template on HTML?";
    option1.innerHTML = ".code";
    option2.innerHTML = "!!!";
    option3.innerHTML = "!";
    option4.innerHTML = "html";
}
function ques3() {
    correctAnswer = option4;
    myTitle.innerHTML = "What is the second parameter of the window.open method?";
    option1.innerHTML = "function";
    option2.innerHTML = "element";
    option3.innerHTML = "value";
    option4.innerHTML = "name";
}
function ques4() {
    correctAnswer = option1;
    myTitle.innerHTML = "If a function has 3 parameters, how many values can be returned to the calling code?";
    option1.innerHTML = "1";
    option2.innerHTML = "As much as you want.";
    option3.innerHTML = "0";
    option4.innerHTML = "You cant.";
}
function ques5() {
    correctAnswer = option2;
    myTitle.innerHTML = "What is the keyword for detecting that the user has submitted a form?";
    option1.innerHTML = "submit";
    option2.innerHTML = "onSubmit";
    option3.innerHTML = "on-submit";
    option4.innerHTML = "Submit";
}
function ques6() {
    correctAnswer = option3;
    myTitle.innerHTML = "A function that's attached to an object is known as a _______.";
    option1.innerHTML = "attribute";
    option2.innerHTML = "element";
    option3.innerHTML = "method";
    option4.innerHTML = "variable";
}
function ques7() {
    correctAnswer = option4;
    myTitle.innerHTML = "What is the keyword that passes a value to the catch parameter?"; 
    option1.innerHTML = "input";
    option2.innerHTML = "case";
    option3.innerHTML = "element";
    option4.innerHTML = "throw";
}
function ques8() {
    correctAnswer = option1;
    myTitle.innerHTML = "What is the keyword that allows all objects created by a particular constructor to share the same property or function?";
    option1.innerHTML = "prototype";
    option2.innerHTML = "constructor";
    option3.innerHTML = "method";
    option4.innerHTML = "case";
}