let options = ['rock','paper','scissors']

let choice = Math.floor(Math.random()*3);

let comp = options[choice];
console.log("Computer throws",comp);
let me = 'rock';

function humanwins(compy,human) {
  if (compy == 'scissors' && human == 'scissors') {
    return "";}
  else if (compy == 'scissors' && human == 'rock'){
    return true;
  }
  else if (compy == 'scissors' && human == 'paper'){
    return false;
  }

  else if (compy == 'rock' && human == 'scissors') {
    return false;}
  else if (compy == 'rock' && human == 'rock'){
    return "";
  }
  else if (compy == 'rock' && human == 'paper'){
    return true;
  }

  else if (compy == 'paper' && human == 'scissors') {
    return true;}
  else if (compy == 'paper' && human == 'rock'){
    return false;
  }
  else if (compy == 'paper' && human == 'paper'){
    return "";
  }

}

console.log('You throw',me);

if (humanwins(comp,me)) {
  console.log('You win!');
}
else if (humanwins(comp,me) === false) {
  console.log('Computer wins!');
}

else {
  console.log('A tie!');
}
