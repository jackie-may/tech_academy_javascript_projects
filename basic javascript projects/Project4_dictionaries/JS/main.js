// a dictionary is a "key value pair collection"
function dictionary() {
	var animal = {
		infraclass: "marsupialia",
		species: "Greater glider",
		habitat: "Eucalypt forests",
		diet: "eucalyptus leaves",
		diet: "eucalyptus buds",
		active: "nocturnal"
	};
	delete animal.diet;	// deleting this value makes the output to be 'undefined' ont he web page if the getelementbyid is calling for the same thing we deleted
	document.getElementById("Dictionary").innerHTML = animal.diet;	//calling the diet value
}