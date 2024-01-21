//variables and const
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');
const timerElement = document.getElementById('time');
const questionTitleElement = document.getElementById('question-title');
const choices = document.getElementById('choices');
const finalScoreElement = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', loadQuestion);
submitButton.addEventListener('click', submitQuiz);


//time related bits
let currentQuestionIndex = 0;
//Timeleft
let timeLeft = 50; 

function startQuiz() {
  document.getElementById('start-screen').classList.add('hide');
  document.getElementById('questions').classList.remove('hide');
  document.getElementById('next').classList.remove('hide');

 // Start time
 startTimer();

 // Fiirst question
 loadQuestions();
}

function startTimer() {
 const timerInterval = setInterval(function () {
   timeLeft--;

   if (timeLeft <= 0) {
     clearInterval(timerInterval);
     endQuiz();
   }

   timerElement.textContent = `: ${timeLeft}`;
 }, 1000);
}







