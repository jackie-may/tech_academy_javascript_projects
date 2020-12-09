function myFunction(p1, p2) {
	return p1 + p2
}
document.getElementById("math").innerHTML = myFunction(200, 70);


function subtraction(p3, p4) {
	return p3 - p4
}
document.getElementById("math2").innerHTML = subtraction(5, 25);

// if document.getelementbyid is inside the brackets (the function) then the html doc needs to contain an action element, i.e., a button / onclick / onload or something
function multiplication() {
	var simpleMath = 6 * 8;
	document.getElementById("math3").innerHTML = "6 x 8 = " + simpleMath;
}

function division() {
	var simpleMath = 48 / 6;
	document.getElementById("math4")
.innerHTML = "48 / 6 = " + simpleMath;
}

// following function shows how to do multiple math operations within the same function
function multipleOperations() {
	var simpleMath = (1 + 2) * 10 / 2 - 5 ;
	document.getElementById("math5").innerHTML = "1 plus 2, multipled by 10, divided in half and then subtracted by 5 equals " + simpleMath;
}

//modulus operator (the percentage symbol) returns the remainder after the dividend is divided by the divisor
function modulusOperator() {
	var simpleMath = 25 % 6;
	document.getElementById("math6").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simpleMath;
}	//the text in quotations and the "+" symbol with the variable name - is what will be printed on the page


//negation operator - returns the opposite or negative form of something.
function negationOperator() {
	var x = 20;
	document.getElementById("math7").innerHTML = -x;
}


// ++ is a increment operator and counts one step up.
var x = 5;
x++;
document.write (x + "<br>");	// using [ + "<br>"] to put a line space between this and the following document.write


// -- is a decrement operator. "to reduce by discrete (individually separate) amounts."
var y = 4.25;
y--;
document.write(y + "<br>");

// Math.random returns a random number between 0 and 1 but when you want it to be between a specified range you use * 100
document.write(Math.random() * 100);

// this is one of many math objects - this is the Math.pow (Math Must Be Capitalized Or It Will Not Work). Math.pow returns the ppwer of y. 4 to the power of 5.
document.getElementById("math8").innerHTML = Math.pow(4, 5);