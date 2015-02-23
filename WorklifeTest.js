// Write a function that takes in a string of text and returns the five words most frequently used in the input string.

var input = 'hello my name name name name name poop poop poop poop balls balls balls is han han han'

//code
function mostFrequentWords (string) {
	var dummyString = string.split(' ');
	var words = {};
	var topFive = [];
	var lowestPossibleWordCount = 0; // word that has the lowest counter in the topFive

	for (var i = 0; i < dummyString.length; i++) {
		if (dummyString[i] in words) {
			words[dummyString[i]]++;
		} else {
			words[dummyString[i]] = 1;
		}
	}
	var keys = Object.keys(words);

	for (var i = 0; i < keys.length; i++) {
		
		if (topFive.length <= 5 || words[keys[i]] > lowestPossibleWordCount) {
			if (topFive.length === 5) {
				topFive.shift();
			}
			topFive.push(keys[i]);
			lowestPossibleWordCount = words[topFive[0]];
		}
	}

	for (var j = 0; j < topFive.length; j++) {
		console.log(topFive[j]+ ':' + ' ' + words[topFive[j]]);
	}
	return topFive;
};
