//while loop tells the computer to execute certain code repeatedly while a particular condition is present
function countLoop() {
	var Digit = "";
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Loop").innerHTML = Digit;
}



//the string length property returns the length of a string (number of characters)
function stringProperty() {
	var str = "howdy pardner";
	var n = str.length;
	document.getElementById("string").innerHTML = n;
}


//a for loop is used to repeat a section of code a number of times. for loops are used when the number of iterations are known
var Instruments = ["guitar", "mandolin", "flute", "harp", "trumpet", "banjo"];
var Content = "";
var Y;
function forLoop() {
	for (Y = 0; Y < Instruments.length; Y++) {
		Content += Instruments[Y] + "<br>";
	}
	document.getElementById("instrumentList").innerHTML = Content; 
}


//Arrays are objects and so are included in the object data type. Objects can have properties (characteristics) and methods (actions).
// arrays are a special type of objects
function arrayFunction() {
	var pbRecipe = [];
	pbRecipe[0] = "toast";
	pbRecipe[1] = "ice cream";
	pbRecipe[2] = "a spoon";
	pbRecipe[3] = "a kong toy for my dog";
	document.getElementById("array").innerHTML = "In this recipe we will put peanut butter on " + pbRecipe[2] + ".";
}


//create an object through utilization of the const keyword and include properties with values
function constantFunction() {
	const snowboard = {type:"Split", brand:"Never Summer", color:"Black", length:"162"}; // this line creates an object and includes properties with values
	snowboard.color = "Blue"; // these are also property values
	snowboard.price = "$999.99";
	snowboard.type = "Split Snowboard";
	document.getElementById("Constant").innerHTML = "The cost of the " + snowboard.brand + "<br>" + snowboard.type + " is " + snowboard.price;
}


//let keyword declares variables that can have block scope. this refers to blocks of code contained within curly brackets - commonly loops
var x = 999;
document.write(x);
{
	let x = 33;
	document.write("<br>" + x);
}
document.write("<br>" + x);


//return statement stops the execution of a function and returns a value from that function
function returnFunction(name) {
	return "howdy " + name;
}
document.getElementById("return").innerHTML = returnFunction("Hank");


//create an object using the let keyword
let dog = {
	breed: "mixed breed mongrel ",
	primaryColor: "black ",
	age: "7 month old ",
	name: "Hank ",
	description : function() {
		return "This dog is a " + this.primaryColor + this.age + this.breed + "named " + this.name + "."
	}
};
document.getElementById("dogObject").innerHTML = dog.description();


//javascript LOOP using a BREAK statement
// a break statment "jumps out" of a loop
var text = "";
var i;
for (i = 0; i < 10; i++) {
	if (i === 3) { break; }
	text += "The number is " + i + "<br>";
}
document.getElementById("demo1").innerHTML = text;


//javascript LOOP using a CONTINUE statement
// a continue statement 'jumps over' one iteration in the loop
var text = "";
var i;
for (i = 0; i < 10; i++) {
	if (i === 3) { continue; }
	text += "THe number is " + i + "<br>";
}
document.getElementById("demo2").innerHTML = text;