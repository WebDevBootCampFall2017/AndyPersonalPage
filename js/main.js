var step;
var stepControl;
var direction;
var rContrib;
var gContrib;
var bContrib;
var isPaused;
var color;
var rButton;
var gButton;
var bButton;
var startButton;
var redTextButton;
var greenTextButton;
var blueTextButton;
var greyTextButton;
function setup(){
	redTextButton = document.getElementById("redTextButton");
	redTextButton.style.color="pink";
	redTextButton.style.backgroundColor="black";
	greenTextButton = document.getElementById("greenTextButton");
	greenTextButton.style.color="green";
	greenTextButton.style.backgroundColor="black";
	blueTextButton = document.getElementById("blueTextButton");
	blueTextButton.style.color="lightblue";
	blueTextButton.style.backgroundColor="black";
	greyTextButton = document.getElementById("greyTextButton");
	greyTextButton.style.color="lightgrey";
	greyTextButton.style.backgroundColor="black";
	stepControl = document.getElementById("size");
	step = stepControl.value;
	rButton = document.getElementById("redButton");
	gButton = document.getElementById("greenButton");
	bButton = document.getElementById("blueButton");
	startButton = document.getElementById("start");
	direction = -1;
	color = 255;
	rContrib = 1;
	rButton.innerHTML="Turn off Red";
	rButton.style.backgroundColor = "red";
	gContrib = 1;
	gButton.innerHTML="Turn off Green";
	gButton.style.backgroundColor = "green";
	bContrib = 1;
	bButton.innerHTML="Turn off Blue";
	bButton.style.backgroundColor = "blue";
	isPaused = false;
	startButton.innerHTML="Pause";
	fade();
	console.log("step = " + step );
}
function cycleRed(){
	var rButton = document.getElementById("redButton");
	if (rContrib == 1){
		rContrib = 0;
		rButton.innerHTML="Turn on Red";
		rButton.style.backgroundColor = "grey";
	} else {
		rContrib = 1;
		rButton.innerHTML="Turn off Red";
		rButton.style.backgroundColor = "red";
	}
}
function cycleGreen(){
	if (gContrib == 1){
		gContrib = 0;
		gButton.innerHTML="Turn on Green";
		gButton.style.backgroundColor = "grey";
	} else {
		gContrib = 1;
		gButton.innerHTML="Turn off Green";
		gButton.style.backgroundColor = "green";
	}
}
function cycleBlue(){
	if (bContrib == 1){
		bContrib = 0;
		bButton.innerHTML="Turn on Blue";
		bButton.style.backgroundColor = "grey";
	} else {
		bContrib = 1;
		bButton.innerHTML="Turn off Blue";
		bButton.style.backgroundColor = "blue";
	}
}
function startFade(){
	if (isPaused){	//start fade
		isPaused = false;
		startButton.innerHTML = "Pause";
		fade();
	} else {
		isPaused = true;
		startButton.innerHTML = "Resume";
	}
}
function changeSize(){
	if (stepControl.value > 25){
		stepControl.value = 25;
	}
	if (stepControl.value < 1){
		stepControl.value = 1;
	}
	step = stepControl.value;
	console.log("Settig step to " + step);
}
var fade = function(){
	var rgb;
	color += (direction * step);
	if (color < 0){
		color = 0;
		direction *= -1;
	}
	if (color >255){
		color = 255;
		direction *= -1;
	}
	rgb = "rgb(" + (rContrib * color) + "," + (gContrib * color) + "," + (bContrib * color) +")";
	document.body.style.backgroundColor = rgb;
	if (!isPaused){
		window.setTimeout(fade, 100);
	}
};
function redText(){
	document.body.style.color = "pink";
}
function greenText(){
	document.body.style.color = "green";
}
function blueText(){
	document.body.style.color = "lightblue";
}
function greyText(){
	document.body.style.color = "lightgrey";
}