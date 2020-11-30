//global variable - meaning the variables are delared outside the function
var x = 10;
function Add_numbers_1() {
	document.write(20 + x + "<br>");
}
function Add_numbers_2() {
	document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();


//local variable - meaning the variable is declared within the function
function Add_numbers_3() {
	var y = 99;
	document.write(20 + y + "<br>");
}
function Add_numbers_4() {
	var y = 99;
	document.write(y + 100 + "<br>");
}
Add_numbers_3();
Add_numbers_4();


//if statement to determine if it is still "day" time
function getDate1() {
	if (new Date().getHours() < 18) {
	document.getElementById("Greeting1").innerHTML = "How are you today?";
	}
}

 
// if statement to determine if it is fall
function getDate2() {
	if (new Date().getMonth() > 9) {
		document.getElementById("Greeting2").innerHTML = "happy fall";
	}
}


//if statement and else statement to determine if someone is old enough to rent a car

function ageFunction() {
	Age = document.getElementById("Age").value;
	if (Age >= 25) {
		Drive = "You are old enough to rent a car!";
	}
	else {
		Drive = "You are not old enough to rent a car!";
	}
	document.getElementById("result").innerHTML = Drive;
}


// if, else, else if statements to determine the proper greeting based on the time of day
function Time_Function() {
	var Time = new Date().getHours();
	var reply;
	if (Time < 12 == Time > 0) {
		reply = "it is morning time!";
	}
	else if (Time > 12 == Time < 18) {
		reply = "it is the afternoon.";
	}
	else {
		reply = "it is evening time.";
	}
	document.getElementById("Time_of_the_day").innerHTML = reply;
}


//utilizing console.log for debugging purposes
a = 5;
b = 6;
// c = a + d; //sends an alert we can only see in the console
c = a + b; // this one works and sends no error to the console
console.log(c)


