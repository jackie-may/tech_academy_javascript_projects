// assigning two variables within the same function example
function myFunction1() {
	var str = "The answer is " + (3+3+3);	// this variable defines a string that will appear when a button is clicked. the button is defined on the html doc that this js doc is linked to.
	var result = str.fontcolor("orange");	// this variable tells the 'result' to be orange
	document.getElementById("demo").innerHTML = result;	// .innerhtml modifies the content of the html document this js doc is linked to
}


// += operator example (step 63)
function myFunction2 () {
	var sentence = "I am learning";
	sentence += " a lot from this book";	// the += operator combines the two pieces of a sentence
	document.getElementById("concatenate").innerHTML = sentence;
}