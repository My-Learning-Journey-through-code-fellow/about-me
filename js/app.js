'usse strict';

console.log('Hello World');

let visitorName = prompt ('What is your name?')

alert(`Welcome to my site ${visitorName}! Please Answer these 5 yeas or no questions`)

let questionOneGuess = Prompt ('Question?') .toLowerCase();
if(questionOneGuess === 'y' ||questionOneGuess === 'yes'){
  alert('Answer correct');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('Answer incorrect')
}

