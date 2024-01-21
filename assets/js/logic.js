//variables and const
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
var submitButton = document.getElementById('submit');
const timerElement = document.getElementById('time');
var nextQuestion = document.getElementById('question-title');
const choices = document.getElementById('choices');
const finalScoreElement = document.getElementById('final-score');
const initialsHighscore = document.getElementById('initials');

startButton.addEventListener('click', startQuiz);
// nextButton.addEventListener('click', loadNextQuestion);
submitButton.addEventListener('click', submitQuiz);


//time related bits
let currentQuestionIndex = 0;
//Timeleft
var timeLeft = 50; 

function nextQuestion() {
  var questions = questions[currentQuestionIndex];
  questionTitleElement.textContent = currentQuestion.question;
  // Clear last choices
  choicesElement.innerHTML = '';
  // Create buttons for choices
  currentQuestionIndex.choices.forEach((choice,) => {
    const choiceButton = document.createElement('button');
    choiceButton.addEventListener('click', function () {
      checkAnswer(choice);
    });
    choicesElement.appendChild(choiceButton);
  });
 };
 
function startQuiz() {
  document.getElementById('start-screen').classList.add('hide');
  document.getElementById('questions').classList.remove('hide');

 // Start time
 startTimer();

 // Fiirst question
 loadNextQuestion();
};

function startTimer() {
 const timerInterval = setInterval(function () {
   timeLeft--;

   if (timeLeft <= 0) {
     clearInterval(timerInterval);
     endQuiz();
   };

   timerElement.textContent = `: ${timeLeft}`;
 }, 1000);
};

 //next
 function loadNextQuestion() {
  currentQuestionIndex++;
 };
 
 function checkAnswer(selectedChoice) {
  const currentQuestionIndex = questions[currentQuestionIndex];
  if (selectedChoice === currentQuestionIndex.answer) {
  } else {
    // when wrong asner is selected
    timeLeft -= 10;
  }
  // Move to the next question
  loadNextQuestion();
 };
     // check end of quiz
  if (currentQuestionIndex < questions.length) {
    nextQuestion();
  } else {
    endQuiz();
  };


 //end quiz
 function endQuiz() {
  // Stop the timer
  timeLeft = 0;
 };


   // Hide the questions and show the end screen
   document.getElementById('questions').classList.add('hide');
   document.getElementById('end-screen').classList.remove('hide');
  
  
   // Display the final score
   finalScoreElement.textContent = timeLeft;
 
 
  
  //submit quiz with initials
  function submitQuiz() {
   const initialsHighscore = initialsHighscore.value;
   //move to highscores once initials have been put in
   window.location.href = 'highscores.html';
  };







