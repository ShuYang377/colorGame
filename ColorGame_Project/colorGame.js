var numberSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons
	for(var i = 0 ; i < modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberSquares=3 : numberSquares = 6;
		reset();
	});
	//square listeners
	for(var i = 0; i < squares.length; i++){
	//add initial color
	//squares[i].style.background = colors[i];
	//click listener
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}

}

function reset(){
	colors = generateRandomColors(numberSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberSquares = 3;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else{
// 			squares[i].style.display = "none";
// 		}
		
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberSquares = 6;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click",function(){
	reset();
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial color
	squares[i].style.background = colors[i];
	//click listener
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//r
	var r = Math.floor(Math.random() * 256);
	//g
	var g = Math.floor(Math.random() * 256);
	//b
	var b = Math.floor(Math.random() * 256);
	//"rgb(r,g,b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


var numberSquares = 6;
var colors = generateRandomColors(numberSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButton = document.querySelectorAll(".mode");

for(var i = 0 ; i < modeButton.length;i++){
	modeButton[i].addEventListener("click",function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent ==="Easy" ? numberSquares = 3: numberSquares = 6;
		// if(this.textContent ==="EASY"){
		// 	numberSquares = 3;
		// }else{
		// 	numberSquares = 6;
		// }

		reset();
		
	});
}


// easyBtn.addEventListener("click",function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberSquares = 3;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		} else{
// 			squares[i].style.display = "none";
// 		}
		
// 	}
// });

// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numberSquares = 6;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click",function(){
	// colors = generateRandomColors(numberSquares);
	// pickedColor = pickColor();
	// colorDisplay.textContent = pickedColor;
	// this.textContent = "New Colors";
	// messageDisplay.textContent = "";
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "#steelblue";
	reset();
})

colorDisplay.textContent = pickedColor;



function changeColors(color){
	for(var i = 0; i < squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//r
	var r = Math.floor(Math.random() * 256);
	//g
	var g = Math.floor(Math.random() * 256);
	//b
	var b = Math.floor(Math.random() * 256);
	//"rgb(r,g,b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


