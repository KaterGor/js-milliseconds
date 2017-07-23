var toppos = 0;
var direction = "down";

function startAnimation() {
	setInterval(animateBird, 16) // run code every 50 milliseconds
}

function animateBird() {
	if (toppos > 300 && direction == "down") {
		direction = "up";
	}
	if (toppos < 5 && direction == "up") {
		direction = "down";
	}
	return direction == "up" ? animateUp() : animateDown();
}

function animateUp() {
	console.log("animateUp");
	var bird = document.getElementById('bird');
	toppos -= 5;
	bird.style.top = toppos + 'px';
}

function animateDown() {
	var bird = document.getElementById('bird');
	toppos += 5;
	bird.style.top = toppos + 'px';
}

document.addEventListener("DOMContentLoaded", startAnimation);