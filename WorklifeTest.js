// Write a function that takes in a string of text and returns the five words most frequently used in the input string.

var input = “hello my name name name is han.”

//code
function mostFrequentWords (string) {
	var dummyString = string.split(' ');
	var words = {};
	var topFive = [];
	var lowestPossibleWordCount = 0; // word that has the lowest counter in the topFive

	for (var i = 0; i < dummyString.length; i++) {
		if (words[dummyString[i]]) {
			words[dummyString[i]]++;
		} else {
			words[dummyString[i]] = 1;
		}
	}

	for (var i = 0; i < Object.keys(words).length; i++) {
		if (words[dummyString[i] > lowestPossibleWordCount]) {
			topFive.push(words[i]);
			lowestPossibleWordCount = words[topFive[topFive.length-1]];
		}
	}

	for (var j = 0; j < topFive.length; j++) {
		console.log(topFive[i]+ ':' + ' ' + words[topFive[i]]);
	}
	return
};
