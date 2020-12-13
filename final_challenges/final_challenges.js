//popup form javascript
function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}
// end of popup form javascript


//JSON.stringify() method
//javascript dictionary object
var dog = {name: "Hank", breed: "mix breed", color: "black"};
//convert JavaScript objects to string format
var JSONstring = JSON.stringify(dog);
document.getElementById("myDog").innerHTML = JSONstring;

//JSON.parse() method
//this is a JSON string variable
var dog = '{"name": "hankie", "breed": "mongrel", "color": "black"}';
//convert JSON strings to JavaScript objects
var JSONstring = JSON.parse(dog);
document.getElementById("myDog2").innerHTML = JSONstring.name + " the " + JSONstring.breed;


//localstorage() method
//store - set the data as a key/value pair to be saved locally in your browser
localStorage.setItem("Name", "hankie");
//retrieve - then use the key "name1" to return its value "hankie"
document.getElementById("myDog3").innerHTML = localStorage.getItem("Name");


function myFunction() {
	document.getElementById("dblclick").style.color="red";
}