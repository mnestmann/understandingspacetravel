function forward(){
	document.getElementById("prehistory").style.display = "none";
	document.getElementById("quizContainer").style.display = "block";
};
function check(){
	let mc1 = document.querySelector('input[name = "mc1"]:checked').value;
	let mc2 = document.querySelector('input[name = "mc2"]:checked').value;
	let mc3 = document.querySelector('input[name = "mc3"]:checked').value;
	let mc4 = document.querySelector('input[name = "mc4"]:checked').value;
	let mc5 = document.querySelector('input[name = "mc5"]:checked').value;
	let mc6 = document.querySelector('input[name = "mc6"]:checked').value;
	let mc7 = document.querySelector('input[name = "mc7"]:checked').value;
	let mc8 = document.querySelector('input[name = "mc8"]:checked').value;
	let mc9 = document.querySelector('input[name = "mc9"]:checked').value;
	let mc10 = document.querySelector('input[name = "mc10"]:checked').value;
	let score = 0;
	if(mc1 === "b"){
		score ++;
	};
	if(mc2 === "a"){
		score ++;
	};
	if(mc3 === "a"){
		score ++;
	};
	if(mc4 === "a"){
		score ++;
	};
	if(mc5 === "c"){
		score ++;
	};
	if(mc6 === "b"){
		score ++;
	};
	if(mc7 === "b"){
		score ++;
	};
	if(mc8 === "d"){
		score ++;
	};
	if(mc9 === "a"){
		score ++;
	};
	if(mc10 === "b"){
		score ++;
	};
	let percent = (score / 10) * 100;
	document.getElementById("quizContainer").style.display = "none";
	document.getElementById("results").style.display = "block";
	document.getElementById("score").innerHTML = "You got " + score + " correct. That's " + percent + 
	"%.";
	const message = ["Amazing! For more details about the history of space travel, view the ", "That's close! See what you missed on the ", "Review the timeline and keep trying the quiz until you get 100%. You can find all the information you need on the "];
	if(percent === 100){
		document.getElementById("percent").innerHTML = message[0];
	};
	if(percent >= 80 && percent < 100){
		document.getElementById("percent").innerHTML = message[1];
	};
	if(percent < 80){
		document.getElementById("percent").innerHTML = message[2];
	};
};
function retake(){
	document.getElementById("results").style.display = "none";
	document.getElementById("quizContainer").style.display = "block";
};
function reveal(){
	document.getElementById("results").style.display = "none";
	document.getElementById("history2").style.display = "block";
};

