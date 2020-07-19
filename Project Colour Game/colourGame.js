var colours = [];
var numSquares  = 6;
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var modeButtons = document.querySelectorAll(".mode");

init()

function init(){
	setupModeButtons()
	setupSquares()
	reset()
}


function setupModeButtons(){
	//mode button Event Listeners
	for(var i = 0 ; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		// if boolean ? do this : else do this;
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset()
		//how many squares to show
		//pick new colour
		//pick new picked colour
		//update page
	})
	}
}
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		//add click listener to squares
		squares[i].addEventListener("click", function(){
			//grab colour of clicked aquare
			var clickedColour = this.style.backgroundColor
			//compare to picked colour
			if (clickedColour === pickedColour){
				//winn
				messageDisplay.textContent = "Correct"
				changeColours(clickedColour);
				h1.style.backgroundColor = clickedColour
				resetButton.textContent = "Play Again?"
			} else{
				this.style.backgroundColor = "#232323"
				messageDisplay.textContent = "Try Again"
			}
		})

	}
}


function reset(){
	//generte new colour
	colours = generateRandomColours(numSquares)
	//pick new colour
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	//change squares colours
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			//shows the squares
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colours[i];
		}else{
			//hides the squares
			squares[i].style.display = "none"
		}
	//add initial colours to squares
	squares[i].style.backgroundColor = colours[i];
	}
	h1.style.backgroundColor = "steelblue"
	messageDisplay.textContent = ""
	resetButton.textContent = "New Colours"

}





resetButton.addEventListener("click", reset)



function changeColours(colour){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//chnage each colour to match given colour
		squares[i].style.background = colour
	} 
}

function pickColour(){
	var random = Math.floor(Math.random()*colours.length)
	return colours[random]
	//generate red
	//generate green
	//generate blue
	
	//assemble

}

function randomColour(){
	var r =  Math.floor((Math.random()*256))
	var g =  Math.floor((Math.random()*256))
	var b =  Math.floor((Math.random()*256))
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

function generateRandomColours(num){
	//make an array
	var arr = []
	//add num random colours to array
	for(i = 0; i<num; i++){
		arr.push(randomColour());

	}
	//return array
	return arr

}