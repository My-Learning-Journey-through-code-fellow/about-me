'usse strict';

console.log('Hello World');

let visitorName = prompt ('What is your name?')

alert(`Welcome to my site ${visitorName}! Please Answer these 5 yes or no questions`)

let questionOneGuess = prompt ('Do you like music?') .toLowerCase();
if(questionOneGuess === 'y' || questionOneGuess === 'yes'){
  alert('Me too');
} else if(questionOneGuess === 'n' || questionOneGuess === 'no'){
  alert('How?')
}

let questionTwoGuess = prompt ('Do you like sweets?') .toLowerCase();
if(questionTwoGuess === 'y' || questionTwoGuess === 'yes'){
  alert('Sweeeeeeeeeeeeet!');
} else if(questionTwoGuess === 'n' || questionTwoGuess === 'no'){
  alert('Are you okay?')
}

let questionThreeGuess = prompt ('Do you like being outdoors?') .toLowerCase();
if(questionThreeGuess === 'y' ||questionThreeGuess === 'yes'){
  alert('Sunshine is the best, isnt it?');
} else if(questionThreeGuess === 'n' || questionThreeGuess === 'no'){
  alert('GO GET SOME SUN!')
}

let questionFourGuess = prompt ('Do you like animals?') .toLowerCase();
if(questionFourGuess === 'y' || questionFourGuess === 'yes'){
  alert('You are a kind soul.');
} else if(questionFourGuess === 'n' || questionFourGuess === 'no'){
  alert('HOW COULD YOU NOT!')
}

let questionFiveGuess = prompt ('Is your day good?') .toLowerCase();
if(questionFiveGuess === 'y' || questionFiveGuess === 'yes'){
  alert('Hell Yea!!!');
} else if(questionFiveGuess === 'n' || questionFiveGuess === 'no'){
  alert('There is always tomorrow')
}