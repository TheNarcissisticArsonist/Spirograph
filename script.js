//Constants
var outerGearRadius = 225; //The radius of the outer gear.
var innerGearRadius = 25; //The radius of the moving gear.

//Global Variables
var htmlElements = {};
var context;

function setup() {
	htmlElements.outerTeeth = document.getElementById("outerTeeth");
	htmlElements.innerTeeth = document.getElementById("innerTeeth");
	htmlElements.innerRadius = document.getElementById("innerRadius");
	htmlElements.penHoleRadius = document.getElementById("penHoleRadius");
	htmlElements.drawButton = document.getElementById("drawButton");
	htmlElements.canvas = document.getElementById("drawingArea");

	context = htmlElements.canvas.getContext("2d");
	resetCanvas();
}
function resetCanvas() {
	context.setTransform(1, 0, 0, 1, 0, 0);
	context.transform(1, 0, 0, 1, htmlElements.canvas.width/2, htmlElements.canvas.height/2);
	context.transform(1, 0, 0, -1, 0, 0);
}

setup();