// get the viewport height and multiply by 1% to get vh unit
// set --vh custom property to CSS
// this allows the app to render correctly on mobile devices
let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`);

const canvas = document.getElementById('canvas');

window.onresize = function () {
	canvas.style.width = '100%';
	canvas.height = '100%';
};

const canvasHeight = 2000;
const canvasWidth = 2000;

const ctx = canvas.getContext('2d');

let a;
let b;
let x1;
let x2;
let y1;
let y2;

let color = 'black';
let x;
let y;
let size = 1;

function getValues() {
	a = document.getElementById('a');
	b = document.getElementById('b');
	x1 = document.getElementById('x1');
	x2 = document.getElementById('x2');
	y1 = document.getElementById('y1');
	y2 = document.getElementById('y2');
}

function drawLine(fromX, fromY, toX, toY) {
	var actualFromX = 1000 + fromX;
	var actualFromY = 1000 - fromY;
	var actualToX = 1000 + toX;
	var actualToY = 1000 - toY;
	console.log(`from (${fromX},${fromY}) to (${toX},${toY})  `);

	ctx.beginPath();
	ctx.moveTo(actualFromX, actualFromY);
	ctx.lineTo(actualToX, actualToY);
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.stroke();
}

var graphClick = document.getElementById('graphClick').addEventListener('click', () => {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	console.log(`a = ${a}, b = ${b}`);
	generateGraph(a, b);
});

function generateGraph(a, b) {
	var i;
	for (i = -1000; i < 1000; i++) {
		drawLine(i, line(a, i, b), i + 1, line(a, i + 1, b));
		console.log(`${i}, ${line(a, i, b)}, ${i + 1}, ${line(a, i + 1, b)}`);
	}
}

// line
function line(a, x, b) {
	return parseInt(a) * x + parseInt(b);
}

function drawAxes() {
	// draw x-axis
	drawLine(-1000, 0, 1000, 0);
	// draw y-axis
	drawLine(0, 1000, 0, -1000);
}

function init() {
	drawAxes();
}

init();
