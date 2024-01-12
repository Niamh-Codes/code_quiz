//starter
let start = document.querySelector('#start');
var timerCount = document.querySelector("#timer")

var secondsLeft = 100

//Timer countdown
// let timerCount = document.querySelector(".timer")
function timer (){
    start.addEventListener('click', function() {
        timerCount = setInterval(function() {
            console.log('!')
        }, 1000);
    });
}


