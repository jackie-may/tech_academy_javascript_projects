// 'type of' operator - this operator gives the type of a variable
//i added the br tags to create space between this and elements(?) not totally sure if that's what these are called.
document.write(typeof 46 + "<br>" + "<br>");


// browser to display NaN because you can't divide 0 by 0
function myFunction1() {
	document.getElementById("demo1").innerHTML = 0/0;
}


// checking to see if somehting is a number by using isNaN
function myFunction2() {
	document.getElementById("demo2").innerHTML = isNaN("this is a string");
}	// displays true because 'this is a string' is not a number


// checking to see if something is a number using isNaN
function myFunction3() {
	document.getElementById("demo3").innerHTML = isNaN('92937483');
}


// asking the innerhtml to display infinity
function myFunction4() {
	document.getElementById("demo4").innerHTML = 2e310;
}


// asking the innerhtml to display -infinity 
function myFunction5() {
	document.getElementById("demo5").innerHTML = -2e310;
}


// using boolean logic to determine if 10 is greater than 5. the output on the webpage will be true or false.
function myFunction6() {
	document.getElementById("demo6").innerHTML = (10 > 5);
}


// using boolean logic to determine if 10 is greater than 20. the output will be true or false. 
function myFunction7() {
	document.getElementById("demo7").innerHTML = (10 > 20);
}


//this action doesn't show up on the page, have to inspect to see it and appears under 'console'
console.log(5+5);


// type coercion - combining two different data types. Specifically here we are combining a 'string' and a 'number'. 
document.write("20" + 5);
document.write("<br>" + "<br>");


// displaying false on the page using boolean logic
document.write(10>20); // this will display false on the page because 10 is not greater than 20
document.write("<br>" + "<br>");



// double equal signs (==) is used to show that comparison should be made. specifically, we are checking to see if the data on the left side is equal to the right side.
//this will display false on the page because 10 is not equal to 15
document.write(10==15);
document.write("<br>" + "<br>");


//this will display true on the page because 101 is equal to 101
document.write(101==101);
document.write("<br>" + "<br>");



//triple equal signs (===) is used to show that a comparison should be made and tha we are checking to see if the data on the left side is equal to the right side and that they are the same types of data
//the following will return true 
document.write(999===999)
document.write("<br>" + "<br>");


//the following will return false because the data types do not match
document.write("999"===666)
document.write("<br>" + "<br>");


//the following will return false because the data types dont match even though the values do.
document.write("888"===888)
document.write("<br>" + "<br>");


//the following will return false because even tho the data types match the values do not.
document.write(111===222)
document.write("<br>" + "<br>");


// Boolean logical operator AND: &&
// the && operator determines the logic between values or variables, such as verifying that __ and __ are true.
//the following will return 'true' because both are true
document.write(2 > 1 && 3 > 2);
document.write("<br>" + "<br>"); // adding this to add a line break between these two document.write(s). adding it as a seperate document.write because when i put it inside the && parenteses it broke the return.

//the following will return false because one is false
document.write(2 > 3 && 3 > 2);
document.write("<br>" + "<br>"); 


// Boolean logical operator OR: ||
// the || operator returns true if even one side is true and returns false if both are false.
// the following will return 'true' even though only one side is true.
document.write(1 > 111 || 111 > 1);
document.write("<br>" + "<br>"); 

// the following will return a false because both are false.
document.write(1 > 999 || 999 < 1);
document.write("<br>" + "<br>"); 


// NOT OPERATOR: !(not)
// !(not) - checks to see if whatever is in parenthesis is true. if __ is false then 'true' will be returned.
// the following function will return true because 10 is not greater than 10
function myFunction8() {
	document.getElementById("not").innerHTML = !(10 > 10);
}

//the following function will return false because 100 is greater than 10
function myFunction9() {
	document.getElementById("not1").innerHTML = !(100 > 10);
}

