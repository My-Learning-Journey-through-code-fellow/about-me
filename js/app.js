'use strict';

console.log('Hello World');

let visitorName = prompt('What is your name?')

let score = 0;

console.log('Name >>> ', visitorName)

alert(`Welcome to my site ${visitorName}! Please Answer these 5 yes or no questions`)

function firstQuestion() {
  let questionOneGuess = prompt('Do you like music?').toLowerCase();

  console.log('Q1 >>>', questionOneGuess)

  if (questionOneGuess === 'y' || questionOneGuess === 'yes') {
    alert('Me too');
    score++;
  } else if (questionOneGuess === 'n' || questionOneGuess === 'no') {
    alert('How?')
  }
}

firstQuestion();

let questionTwoGuess = prompt('Do you like sweets?').toLowerCase();

console.log('Q2 >>>', questionTwoGuess)

if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
  alert('Sweeeeeeeeeeeeet!');
  score++;
} else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
  alert('Are you okay?')
}

let questionThreeGuess = prompt('Do you like being outdoors?').toLowerCase();

console.log('Q3 >>>', questionThreeGuess)

if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
  alert('Sunshine is the best, isnt it?');
  score++;
} else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
  alert('GO GET SOME SUN!')
}

let questionFourGuess = prompt('Do you like animals?').toLowerCase();

console.log('Q4 >>>', questionFourGuess)

if (questionFourGuess === 'y' || questionFourGuess === 'yes') {
  alert('You are a kind soul.');
  score++;
} else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
  alert('HOW COULD YOU NOT!')
}

let questionFiveGuess = prompt('Is your day good?').toLowerCase();

console.log('Q5 >>>', questionFiveGuess)

if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
  alert('Hell Yea!!!');
  score++;
} else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
  alert('There is always tomorrow')
}

// in collaboration with Hunter Fehr, and Chris Johnston 
let myNum = 777;

let guessNum = 4;

while (guessNum > 0) {
  let userNumGuess = prompt('What is my favorite number?');
  guessNum--;
  console.log('NumberGuess >>>', userNumGuess)
  if (parseInt(userNumGuess) === myNum) {
    alert("Correct, Great job!!")
    score++;
  } else if (questionOneGuess === 'n' || questionOneGuess === 'no') {
    alert('How?')
  }
}
firstQuestion();
function secondQuestion() {
  let questionTwoGuess = prompt('Do you like sweets?').toLowerCase();

  console.log('Q2 >>>', questionTwoGuess)

  if (questionTwoGuess === 'y' || questionTwoGuess === 'yes') {
    alert('Sweeeeeeeeeeeeet!');
    score++;
  } else if (questionTwoGuess === 'n' || questionTwoGuess === 'no') {
    alert('Are you okay?')
  }
}
secondQuestion();
function thirdQuestion() {
  let questionThreeGuess = prompt('Do you like being outdoors?').toLowerCase();

  console.log('Q3 >>>', questionThreeGuess)

  if (questionThreeGuess === 'y' || questionThreeGuess === 'yes') {
    alert('Sunshine is the best, isnt it?');
    score++;
  } else if (questionThreeGuess === 'n' || questionThreeGuess === 'no') {
    alert('GO GET SOME SUN!')
  }
}
thirdQuestion();
function fourthQuestion() {
  let questionFourGuess = prompt('Do you like animals?').toLowerCase();

  console.log('Q4 >>>', questionFourGuess)

  if (questionFourGuess === 'y' || questionFourGuess === 'yes') {
    alert('You are a kind soul.');
    score++;
  } else if (questionFourGuess === 'n' || questionFourGuess === 'no') {
    alert('HOW COULD YOU NOT!')
  }
}
fourthQuestion();
function fifthQuestion() {
  let questionFiveGuess = prompt('Is your day good?').toLowerCase();

  console.log('Q5 >>>', questionFiveGuess)

  if (questionFiveGuess === 'y' || questionFiveGuess === 'yes') {
    alert('Hell Yea!!!');
    score++;
  } else if (questionFiveGuess === 'n' || questionFiveGuess === 'no') {
    alert('There is always tomorrow')
  }
}
fifthQuestion();
// in collaboration with Hunter Fehr, and Chris Johnston 
function numGuessGame() {
  let myNum = 777;

  let guessNum = 4;

  while (guessNum > 0) {
    let userNumGuess = prompt('What is my favorite number?');
    guessNum--;
    console.log('NumberGuess >>>', userNumGuess)
    if (parseInt(userNumGuess) === myNum) {
      alert("Correct, Great job!!")
      score++;
      guessNum = 0;
    }
    else if (parseInt(userNumGuess) > myNum) {
      alert("Too High")
    }
    else if (parseInt(userNumGuess) < myNum) {
      alert("Too Low")
    }
  }
}
numGuessGame();
function guessGame() {
  let guessNumQ7 = 6;

  let myLocationArr = ['new orleans', 'louisiana', 'the south', 'orleans parish', 'united states']

  while (guessNumQ7 > 0) {
    let questionSevenGuess = prompt('Where is the birthplace of Jazz music?').toLowerCase();
    guessNumQ7--;
    console.log('Q7 >>>', questionSevenGuess)
    for (let i = 0; i < myLocationArr.length; i++) {
      if (questionSevenGuess == myLocationArr[i]) {
        alert("Aren't you just Jazzed you got it right?")
        score++;
        guessNumQ7 = 0;
      }
    }
  }
  if (guessNumQ7 === 0) {
    alert("New Orleans, Orleans Parish, Louisiana, the South, United States. Is the birthplace of Jazz.")
  }
  {
    alert(`Thank you, ${visitorName} for your participation! You scored ${score} of 7`)
  }
}
guessGame();
