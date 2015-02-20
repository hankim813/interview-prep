// ====================================================================
// Spiral Traversal of a Matric
// ====================================================================
// Input: 2D Array
// Output: Traverse and print from top left in spiral motion..

// Solution:

var spiralTraverseMatrix = function (array) {
	var results = [];
	var starting_row_index = 0;
	var starting_col_index = 0;
	var ending_row_index = array.length - 1;
	var ending_col_index = array[0].length - 1;

	while (starting_col_index <= ending_col_index && starting_row_index <= ending_row_index) {

		for (var i = starting_col_index; i <= ending_col_index; i++) {
			results.push(array[starting_row_index][i]);
		}
		starting_row_index ++;

		for (var i = starting_row_index; i <= ending_row_index; i++) {
			results.push(array[i][ending_col_index]);
		}
		ending_col_index --;

		if (starting_row_index < ending_row_index) {
			for (var i = ending_col_index; i >= starting_col_index; i--) {
				results.push(array[ending_row_index][i]);
			}
		};

		ending_row_index --;

		if (starting_col_index < ending_col_index) {
			for (var i = ending_row_index; i >= starting_row_index; i--) {
				results.push(array[i][starting_col_index]);
			}
		}
		
		starting_col_index ++
	}
	for (var i = 0; i <= results.length - 1; i++) {
		console.log(results[i]);
	}
	return results;
};

var exampleArray = [['a','b','c','d'],['j','k','l','e'],['i','h','g','f']];
spiralTraverseMatrix(exampleArray);

// Complexity:
// Greedy Approach. O(n^2) Time O(n) Space. Can be O(1) space if you just pop off from the input array

// ====================================================================
// Apple Stocks
// ====================================================================
// Input: Array of prices where indices are minutes from 9:30AM.
// Output: Greatest profit without short selling.

// Solution:

function greatestProfit (stocks) {
	var min_price = stocks[0];
	var max_profit = 0;

	for (var i = 0; i < stocks.length; i++) {
		// Check if the current price is lower than min_price and if so update the min_price
		if (stocks[i] < min_price) {
			min_price = stocks[i];
		}
		// Check if selling at the current price will yield more profit than max_profit, if so update.
		if (stocks[i] - min_price > max_profit) {
			max_profit = stocks[i] - min_price;
		}
	}
	return max_profit;
};

// Complexity: 
// Greedy Approach. O(n) time and O(1) space

// ====================================================================
// Bracket Validator
// ====================================================================
// Input: String of brackets ie. '{[()[]]}', '({])}'
// Output: Boolean value depending on whether brackets are properly closed.

// Solution:

function bracketValidator (code) {
	var pairs = {
		'(': ')',
		'{': '}',
		'[': ']'
	};
	var openers = ['(', '{', '['];
	var closers = [')', '}', ']'];

	var pairStack = [];

	for (var i = 0; i < code.length; i++) {
		if (openers.indexOf(code[i]) !== -1) {
			pairStack.push(code[i]);
		}
		if (closers.indexOf(code[i]) !== -1) {
			if (pairStack.length === 0) {
				return false;
			} else {
				var last_opener = pairStack.pop();
				if (pairs[last_opener] !== code[i]) { 
					return false
				};
			}
		}
	}

	return pairStack.length === 0;
};

// Complexity:
// Greedy/Brute Approach. O(n) time and O(n) space

// ====================================================================
// Palindrome
// ====================================================================
// Input: String ie. 'racecar', 'agaaaracecar'
// Output: Longest Palindrome, a seqeunce of letters that are same backwards and forwards

// Solution:

function longestPalindrome (string) {
	var potentialWord = '';
	var longestWord = '';

	for (var i = 0; i < string.length - 1; i++) {
		for (var k = i + 1; k < string.length; k++) {
			if (string[i] === string[k]) {
				potentialWord = string.substring(i,k+1);
				if (potentialWord === potentialWord.split('').reverse().join('') && potentialWord.length > longestWord.length) {
					longestWord = potentialWord;
				}
			}
		}
	}
	return longestWord;
};

// Complexity:
// Greedy Approach. O(n^3) time O(1) space. Can be O(n^2) (find each possible center and move outwords, and check if left and right is the same.) and O(n) time. Manacher Algorithm

// ====================================================================
// For Loop Javascript TimeOut Bug Fix
// ====================================================================
// Input:
// for (var i = 0; i < 5; i++){
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 0)
// }
// In most other languages, the code above would lead to an error because the “life” (i.e., scope) of the variable i would be restricted to the for block. In JavaScript, though, this is not the case and the variable i remains in scope even after the for loop has completed, retaining its last value after exiting the loop. (This behavior is known, incidentally, as variable hoisting). setTimeout adds to the browser event queue, so when the for loop completes, i = 5 and thus the i inside the console log is referencing that i, and printing '5' five times.
// Output: Fix the bug, since it logs 5 five times, not 0, 1, 2, 3, 4
// We get rid of the reference to i by passing it in as a variable, and also immediately invoke the function so that it is not being queued in the browser events.

function javascriptBugFix () {
	for (var i = 0; i < 5; i ++) {
		(function (x) {
			setTimeout(function () {
				console.log(x);
			}, 0)
		})(i);
	}
}

// ====================================================================
// Make a Linked List and Print
// ====================================================================

function LinkedList () {
	this.list = [];
};

LinkedList.prototype.head = function() {
	return this.list[0];
};

LinkedList.prototype.addNode = function (node) {
	this.list.push(node);
};

function printLinkedList (node) {
	console.log(node.val);
	if (node.refersTo) {
		return printLinkedList(node.next());
	}
};

function Node (val) {
	this.val = val;
	this.refersTo = null;
};

Node.prototype.next = function() {
	return this.refersTo;
};

Node.prototype.setRef = function(node) {
	this.refersTo = node;
};

var linkedList = new LinkedList ();
var head = new Node (1);
var firstNode = new Node (2);
var secondNode = new Node (3);
linkedList.addNode(head);
linkedList.addNode(firstNode);
linkedList.addNode(secondNode);
head.setRef(firstNode);
firstNode.setRef(secondNode);
printLinkedList(linkedList.head());

// ====================================================================
// Reverse/Print a Linked List
// ====================================================================

function reverseLinkedList (node) { 
	var previous = null;
	var newList = [];

	while (node) {
		newList.unshift(node);
		save = node.next();
		node.setRef(previous);
		previous = node; 
		node = save
	} 

	for (var i = 0; i < newList.length; i++){
		console.log(newList[i].val);
	}
};

// Complexity
// Greedy/Bucketing Approach. O(n) time and space

// ====================================================================
// DLL: Create a Doubly Linked List
// ====================================================================

function DoublyLinkedList () {
	this.list = [];
}

DoublyLinkedList.prototype = {
	head: function () {
		var head;
		for (var i = 0; i < this.list.length; i++) {
			if (!this.list[i].referredBy) {
				head = this.list[i];
			}
		}
		return head;
	},

	tail: function () {
		var tail;
		for (var i = 0; i < this.list.length; i++) {
			if (!this.list[i].refersTo) {
				tail = this.list[i];
			}
		}
		return tail;
	},

	addNode: function (node) {
		this.list.push(node);
	},

	print: function () {
		var head = this.head();
		var newList = [];

		function recurse (node) {
			if (!node.refersTo) {
				newList.push(node);
				recurseBack(node)
			} else {
				newList.push(node);
				recurse(node.next());
			}
		};

		function recurseBack (node) {
			if (!node.referredBy) {
				return
			} else {
				newList.push(node.prev());
				recurseBack(node.prev());
			}
		};

		function printNewList () {
			for (var i = 0; i < newList.length; i++) {
				console.log(newList[i]);
			}
		};

		recurse(head);
		printNewList();
	},

	reverseListandPrint: function () {

		function recurse (node) {
			if (!node.refersTo) {
				var next = node.prev();
				node.refersTo = next;
				node.referredBy = null;
				recurseBack(next, node);
				return
			} else {
				var prev = node.next();
				var next = node.prev();
				node.refersTo = next;
				recurse(prev);
			}
		};

		function recurseBack (node, prev) {
			if (!node.refersTo) {
				node.referredBy = prev;
				return
			} else {
				var next = node.prev();
				node.referredBy = prev;
				recurseBack(next, node);
			}
		};

		recurse(this.head());
		this.print();
	}
};

function Node (value) {
	this.val = value;
	this.refersTo = null;
	this.referredBy = null;
}

Node.prototype = {
	pointsTo: function (node) {
		this.refersTo = node;
		node.referredBy = this;
		return this;
	},

	reverseConnectionWith: function (node) {
		var next = node.refersTo;
		node.referredBy = next;
	},

	prev: function () {
		return this.referredBy;
	},

	next: function () {
		return this.refersTo;	
	}
};

doublyLinkedList = new DoublyLinkedList();
head = new Node(1);
firstNode = new Node(2);
secondNode = new Node(3);
tail = new Node(4);

doublyLinkedList.addNode(head);
doublyLinkedList.addNode(firstNode);
doublyLinkedList.addNode(secondNode);
doublyLinkedList.addNode(tail);

head.pointsTo(firstNode);
firstNode.pointsTo(secondNode);
secondNode.pointsTo(tail);

doublyLinkedList.print();
doublyLinkedList.reverseListandPrint();


// ====================================================================
// Anagrams: Number to Letters
// ====================================================================

// Input: a number in the form of a string where 1-26 represents a corresponding letter in the alphabet where num > 0
// Output: all possible combinations of letters

// i.e. 111 = a, ka, aaa, ak

var alphabet = {
		1: 'a',
		2: 'b',
		3: 'c',
		4: 'd',
		5: 'e',
		6: 'f',
		7: 'g',
		8: 'h',
		9: 'i',
		10:'j',
		11:'k',
		12:'l',
		13:'m',
		14:'n',
		15:'o',
		16:'p',
		17:'q',
		18:'r',
		19:'s',
		20:'t',
		21:'u',
		22:'v',
		23:'w',
		24:'x',
		25:'y',
		26:'z'
	}

function numsToLetters (num) {
	var result = []; 

	function recurseNum (combo, num) {
		if (!num) {
			result.push(combo)
			return
		} 
		var newNum = num.substring(1);
		var newCombo = combo + alphabet[num[0]];
		recurseNum(newCombo, newNum);
		
		if ((num.length > 1) && num.substring(0,2) <= 26) {
			var newNum2 = num.substring(2);
			var combo2 = combo + alphabet[num.substring(0,2)];
			recurseNum(combo2, newNum2);
		}
	}

	recurseNum('', num)
	return result;
}	

// Complexity:
// Greedy Approach. O(n) time and O(n) space

// ====================================================================
// Async Functions: Chaining AJAX Calls
// ====================================================================

// Input  : Given an array of ajax calls (uri's)
// Output	: Must return --only after all ajax calls were completed-- an array of all the responses, 
// 					in the order of the calls made

var ajaxCalls = ['http://localhost:3000', 'http://han.com', 'http://hello.com'];

function chainAsyncCalls (calls) {
	var responses = [];

	function fireAjax (address) {
		http.get(address).success(function (response) {
			responses.push(response);
		}).error(function (error) {
			responses.push(error);
		})
		if (calls.length) { fireAjax(calls.shift()) };
	};

	fireAjax(calls.shift());
	return responses;
};

// Complexity:
// Greedy Approach. O(n) time and space

// ====================================================================
// Call() and Apply() Trick
// ====================================================================

// Rewrite the Call() function using Apply()

var hello = {
	world: function (name) {
		return 'Good morning, ' + name + ' :)'
	}
};


function call (context, arg) {
	console.log(arguments)
	var options = Array.prototype.slice.apply(arguments, [1]);
	return apply(context, options);
}

hello.world.call(hello, 'han');

// Note: 
// call(context, arg1, arg2,..) 
// apply(context, [args])
// All functions have this special 'array' like object called 'arguments'. 
// They do not have any built in array so that is why you have to alter the Array prototype.


