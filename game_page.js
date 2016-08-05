// defines our initial variable with a min value of 1
var min =1;
// defines another variable for the max value of 100
var max =100;
// define a varibale guess1
var guess1;
// define a variable random
var random;
// define a variable count
var count = 0;
var name;
// function declare a variable defined with the user name

// }
// calling the function
// getName ()
function getName(){
  name = document.getElementById("nameBox").value;
  document.getElementById("outPut").innerHTML=(name + ", guess if you DARE!");
}
// a function getRandomInclusive that calls a random number between 1 to 100 inclusive.
function getRandomIntInclusive(min, max) {
  random = Math.floor(Math.random()*(max-min + 1)) + min;
}
// calls the function getRandomIntInclusive for the variables min, max
  getRandomIntInclusive(min,max);
  alert(random);




function userGuess(){
  var guess1 = document.getElementById("inputBox").value;
  if (guess1 != random && count<2) {
    count = count + 1;
  }

  if (isNaN(guess1)) {
    document.getElementById("outPut").innerHTML=("Please enter numbers only");
  }


  if (guess1 > random) {
    document.getElementById("outPut").innerHTML=("Too high, try again");
  }

  if (guess1 < random) {
    document.getElementById("outPut").innerHTML=("Too low, try again");
  }

if (guess1 == random) {
   document.getElementById("outPut").innerHTML=("well done " + name);
}
if (count === 2){
   document.getElementById("outPut").innerHTML=("SORRY YOU LOSE");
}
}


function reStart() {
  count = 0;
  name = "";
  getRandomIntInclusive(min, max);
  alert(random);
}
