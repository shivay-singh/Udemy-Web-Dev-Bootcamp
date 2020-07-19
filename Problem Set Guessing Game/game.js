//create secret number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("guess a number"));


//check guess
if(guess === secretNumber){
	alert("You got it right");
}

//otherwise too high
else if (guess > secretNumber){
	alert("too high")
}
// too low
else if (guess > secretNumber){
	alert("too low")
}