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
	console.log(`Drawing from (${fromX},${fromY}) to (${toX},${toY})`);
	ctx.beginPath();
	ctx.moveTo(fromX, fromY);
	ctx.lineTo(toX, toY);
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.stroke();
}

var graphClick = document.getElementById('graphClick').addEventListener('click', () => {
	generateGraph();
});

function generateGraph() {
	// draw x-axis
	drawLine(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);
	// draw y-axis
	drawLine(0, canvasHeight / 2, canvasWidth, canvasHeight / 2);
}
