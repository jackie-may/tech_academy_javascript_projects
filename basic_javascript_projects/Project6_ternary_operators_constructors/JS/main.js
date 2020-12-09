// ternary operators. ternary means made up of three parts. a ternary operator operates on three values. it can be used to assign a value to a variable based on a condition. this is also referred to as a conditional operator in that it assigns a value to a variable based on a condition.
// the following program is determining whether or not someone is tall enough to ride a ride. the variable is the height and the condition is if they are tall enough, they can ride the ride
function ternaryFunction1() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
	document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

//ternary operator - the variable is the age and the condition is if they are old enough to vote. if someone is 18 then they are old enough to vote.
function ternaryFunction2() {
	var Age, canVote;
	Age = document.getElementById ("Age").value;
	canVote = (Age < 18) ? "You are too young":"You are old enough";
	document.getElementById("Vote").innerHTML = canVote + " to vote.";
}

// the following is an exercise in 'keywords' and 'constructors'. there are some words that are offlimits as far as variables and other constructors because they initiate specific actions or meanings
function Vehicle(Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jackie = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//variable using the reserved word "true"
//var true = new Vehicle("Chevrolet", "Silverado", 2004, "Silver");
function myFunction1() {
	document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//constructor function using "new" and "this" keywords
function myFunction2() {
	document.getElementById("New_and_This").innerHTML = "Jackie drives a " + Jackie.Vehicle_Color + "-colored " + Jackie.Vehicle_Model + " manufactured in " + Jackie.Vehicle_Year;
}


//the following is an exercise in assigning a variable a value of a reserved word "true". i have commented this code out because it was breaking the function below for some reason. and since i didn't need to display it at all, thought it best just to comment it out.
//function myFunction3() {
	//document.getElementById("demo1").innerHTML = "true drives a " + true.Vehicle_Color + "-colored " + true.Vehicle_Model + " manufactured in " + true.Vehicle_Year;
//}


//constructor function for person objects
function Person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}

//create a person object
var myFather = new Person("John", "Doe", 50, "blue");

//display age
document.getElementById("demo2").innerHTML = "My father is " + myFather.age + ".";


//nested function
function Nested_Function() {
	document.getElementById("Nesting").innerHTML = Nest();
	function Nest() {
		var Starting_point = 9;
		function Plus_one() {Starting_point += 1;}
		Plus_one();
		return Starting_point;
	}
}