// The concat() method concatenates(connects) two or more strings.
function fullSentence() {
	var part1 = "Don't forget ";
	var part2 = "to ";
	var part3 = "wash your hands ";
	var part4 = "and ";
	var part5 = "call your mom ";
	var part6 = "<3."
	var whole_sentence = part1.concat(part2, part3, part4, part5, part6);
	document.getElementById("concatenate").innerHTML = whole_sentence;
}


//The indexOf() method returns the position of the first occurrence of a specified text
function positionFinder1() {
	var str = "Covid cases are exploding all over right now.";
	var pos = str.indexOf("exploding");
	document.getElementById("startPosition").innerHTML = pos;	
}


//The slice() method is a string method that extracts a section of a string and then returns the extracted section in a new string.
function sliceMethod() {
	var sentence =  "Covid cases are exploding all over right now.";
	var section = sentence.slice(16,25);
	document.getElementById("slice").innerHTML = section;
}


//The toUpperCase() method converts a string to uppercase letters.
function upperCase() {
	var str = "howdy neighbor";
	var up = str.toUpperCase();
	document.getElementById("upper").innerHTML = up;
}


//The search() method searches a string for a specified value, and returns the position of the match.
function searchMethod() {
	var str = "howdy neighborly friend";
	var s = "friend";
	document.getElementById("search").innerHTML = s;
}


//The “toString()” method returns a number as a string
function stringMethod() {
	var x = 666;
	document.getElementById("newString").innerHTML = x.toString();
}


//The toPrecision() method formats a number to a specified length
function precisionMethod() {
	var y = 12938.66666666666666;
	document.getElementById("precise").innerHTML = y.toPrecision(5);
}


//The toFixed() method converts a number into a string, rounding to a specified number of decimals.
function fixedFunction() {
	var num = 5.5555;
	var z = num.toFixed(2);
	document.getElementById("fixed").innerHTML = z;
}


//The valueOf() method returns the primitive value of a String object.
function valueFunction() {
	var str = "Howdy pardner";
	var res = str.valueOf();
	document.getElementById("value").innerHTML = res;
}