const startGame = document.getElementById('openQuestions');
const results = document.getElementById('seeResults');
const showResults = document.getElementById('finalResults');
const exitPage = document.getElementById('exit');
const answer = document.getElementById('questions');
const theResult = document.querySelector(".theResults");
const last = document.querySelector('#lastQuestion');

const openQuestions = () => {
  questions.style.display = 'block'
}
const seeResults = () => {
  if (score === 0) {
      theResult.innerHTML = "You scored 0 of 10!" + " See you on Wall Street buddy :("
  } else if (score === 1) {
    theResult.innerHTML = "You scored 1 of 10!" + " Your tech career is not looking good"
  } else if (score === 2) {
    theResult.innerHTML = "You scored 2 of 10!" + " At least you tried."
  } else if (score === 3) {
    theResult.innerHTML = "You scored 3 of 10!" + " Stick to analyzing stocks"
  } else if (score === 4) {
    theResult.innerHTML = "You scored 4 of 10!" + " You're still learning, but I see potential!"
  } else if (score === 5) {
    theResult.innerHTML = "You scored 5 of 10!" + " I think you're ready for an internship"
  } else if (score === 6) {
    theResult.innerHTML = "You scored 6 of 10!" + " Alright lets try learning basic coding"
  } else if (score === 7) {
    theResult.innerHTML = "You scored 7 of 10!" + " I think you're ready to work for Amazon"
  } else if (score === 8) {
    theResult.innerHTML = "You scored 8 of 10!" + " Alright you are on your way to becoming the next Mark Zuckerberg!!"
  } else if (score === 9) {
    theResult.innerHTML = "You scored 9 of 10!" + " Silicon Valley, here we come!!"
  } else if (score === 10) {
    theResult.innerHTML = "You scored 10 of 10!" + " You are a software engineer? That's funny because I am so much better then you!"
  }
}

const scrollTop = () => {
    answer.scrollTo(0,0); 
    }
const exitGame = () => {
    
    finalResults.style.display = 'none';
}
const scrollD = () => {
answer.scrollBy(0, 750); 
}
let score = 0;
const updateScore = () => {
    score++;
    console.log(score);
}
startGame.addEventListener('click', openQuestions);results.addEventListener('click', seeResults);
exitPage.addEventListener('click', 
function () {
exitGame();
score = 0;
console.log("Score is " + score);
})
answer.addEventListener('click', 
function (e) {
    console.log(e.target)
    if (e.target.classList.contains("answer1")) {
        console.log("yay!");
        updateScore();  
        scrollD();
        
    } else if (e.target.classList.contains("wrong")) {
        scrollD();
        console.log("wrong");
    } else {
    
        console.log("nada");   
    }
})
last.addEventListener('click',
function (e) {
    if (e.target.classList.contains("answer1")) {
        updateScore();
    };
scrollTop();
seeResults();
questions.style.display = 'none';
finalResults.style.display = 'block';
});
