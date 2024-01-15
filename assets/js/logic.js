// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//Vvariables
var startButton = document.querySelector('#start');
var timerCount = document.querySelector("#time");
var finish = document.querySelector ('#end-screen');
var questionSection = document.querySelector('#questions')
var loadNextQuestion = document.querySelector('#next question');

//time related bits
var startTimer = 0;
var timeLeft = 100;

//event listeners
startButton.addEventListener('click', startQuiz);
startTimer.addEventListener('click', timeLeft);


//start quiz function
function startQuiz() {
    //show or hide
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('#questions').classList.remove('hide');
    // // start timer
    // startTimer();
    // Load the first question
    loadQuestion();
  };

//   //load next questions function
//   function loadQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionTitleElement.textContent = currentQuestion.question;
//   };



