// ====================================================================
// Spiral Traversal of a Matric
// ====================================================================
// Input: 2D Array
// Output: Traverse and print from top left in spiral motion..

// Solution:

var spiralTraverseMatrix = function (array) {
	var startingRowIndex = 0;
	var startingColIndex = 0;
	var endingRowIndex = array.length - 1;
	var endingColIndex = array[0].length - 1;

	while (startingColIndex <= endingColIndex && startingRowIndex <= endingRowIndex) {

		for (var i = startingColIndex; i <= endingColIndex; i++) {
			console.log(array[startingRowIndex][i])
		}
		startingRowIndex ++;

		for (var i = startingRowIndex; i <= endingRowIndex; i++) {
			console.log(array[i][endingColIndex])
		}
		endingColIndex --;

		if (startingRowIndex < endingRowIndex) {
			for (var i = endingColIndex; i >= startingColIndex; i--) {
				console.log(array[endingRowIndex][i])
			}
		};

		endingRowIndex --;

		if (startingColIndex < endingColIndex) {
			for (var i = endingRowIndex; i >= startingRowIndex; i--) {
				console.log(array[i][startingColIndex])
			}
		}
		
		startingColIndex ++
	}
};

var exampleArray = [['a','b','c','d'],['j','k','l','e'],['i','h','g','f']];
spiralTraverseMatrix(exampleArray);

// Complexity:
// Greedy Approach. O(n^2) Time O(1) Space.

// ====================================================================
// Apple Stocks
// ====================================================================
// Input: Array of prices where indices are minutes from 9:30AM.
// Output: Greatest profit without short selling.

// Solution:

function greatestProfit (stocks) {
	var minPrice = stocks[0];
	var maxProfit = 0;

	for (var i = 0; i < stocks.length; i++) {
		// Check if the current price is lower than minPrice and if so update the minPrice
		if (stocks[i] < minPrice) {
			minPrice = stocks[i];
		}
		// Check if selling at the current price will yield more profit than maxProfit, if so update.
		if (stocks[i] - minPrice > maxProfit) {
			maxProfit = stocks[i] - minPrice;
		}
	}
	return maxProfit;
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
	var potentialWord;
	var longestWord;

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
// Greedy Approach. O(n^3) time O(1) space. Can be O(n^2) (find each possible center and move outwords,
// and check if left and right is the same.) and O(n) time. Manacher Algorithm. 


// ====================================================================
// For Loop Javascript TimeOut Bug Fix
// ====================================================================
// Input:
// for (var i = 0; i < 5; i++){
// 	setTimeout(function () {
// 		console.log(i);
// 	}, 0)
// }

// In most other languages, the code above would lead to an error because the “life” (i.e., scope) 
// of the variable i would be restricted to the for block. In JavaScript, though, this is not the 
// case and the variable i remains in scope even after the for loop has completed, retaining its 
// last value after exiting the loop. (This behavior is known, incidentally, as variable hoisting). 
// setTimeout adds to the browser event queue, so when the for loop completes, i = 5 and thus the 
// i inside the console log is referencing that i, and printing '5' five times.

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

function LinkedList (head) {
	this.list = [];
	this.head = head;
};

LinkedList.prototype = {
	addNode: function (node) {
		this.list.push(node);
		return this.list;
	},

	print: function (node) {
		console.log(node.val)
		if (node.refersTo) {
			return this.print(node.next());
		}
	}
};

function Node (val) {
	this.val = val;
	this.refersTo = null;
};

Node.prototype = {
	next: function() {
		return this.refersTo;
	},

	setRef: function (node) {
		this.refersTo = node;
	}
};

var head = new Node (1);
var linkedList = new LinkedList (head);
var firstNode = new Node (2);
var secondNode = new Node (3);
linkedList.addNode(head);
linkedList.addNode(firstNode);
linkedList.addNode(secondNode);
head.setRef(firstNode);
firstNode.setRef(secondNode);
linkedList.print(linkedList.head);

// ====================================================================
// Reverse/Print a Linked List
// ====================================================================

LinkedList.prototype.reverse = function() {
	var previous = null;
	var list = this;

	function recurse(node) {
		if (!node.next()) {
			node.refersTo = previous;
			list.head = node;
			return
		}
		node.refersTo = previous
		previous = node;
		recurse(node.next());
	};

	recurse(this.head);
	return this.print(this.head);
};

// Complexity
// Greedy/Bucketing Approach. O(n) time and O(1) space

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
	var options = Array.prototype.slice.apply(arguments, [1]);
	return apply(context, options);
}

hello.world.call(hello, 'han');

// Note: 
// call(context, arg1, arg2,..) 
// apply(context, [args])
// All functions have this special 'array' like object called 'arguments'. 
// They do not have any built in array so that is why you have to alter the Array prototype.


// ====================================================================
// Change Maker
// ====================================================================
// Make a function that takes itemPrice and changeInput as params and find out how many 
// dollars, quarters, dimes, nickels, and pennies they should get in return.

var itemPrice = 8.68;
var changeInput = 20.00;


function changeMaker (itemPrice, changeInput) {
	var changeNeeded = changeInput - itemPrice;
	var change = {
		dollars: Math.floor(changeNeeded),
		quarters: 0,
		dimes: 0,
		nickels: 0,
		pennies: 0
	};

	changeNeeded -= change.dollars;

	change.quarters = Math.floor(changeNeeded / 0.25);
	changeNeeded -= change.quarters * 0.25;

	change.dimes = Math.floor(changeNeeded / 0.10);
	changeNeeded -= change.dimes * 0.10;

	change.nickels = Math.floor(changeNeeded / 0.05);
	changeNeeded -= change.nickels * 0.05;

	change.pennies = Math.floor(changeNeeded / 0.01);
	changeNeeded -= change.pennies * 0.01;

	return change;
};

// ====================================================================
// Sorting: Quick Sort
// ====================================================================
// Implement a quick sort algorithm.

// Notes: 

// Quicksort is a divide and conquer algorithm which relies on a partition operation: to partition an array an element
// called a pivot is selected. All elements smaller than the pivot are moved before it and all greater elements are 
// moved after it. This can be done efficiently in linear time and in-place. The lesser and greater sublists are then 
// recursively sorted. This yields average time complexity of O(n log n), with low overhead, and thus this is a popular 
// algorithm. Efficient implementations of quicksort (with in-place partitioning) are typically unstable sorts and 
// somewhat complex, but are among the fastest sorting algorithms in practice. Together with its modest O(log n) space 
// usage, quicksort is one of the most popular sorting algorithms and is available in many standard programming libraries.

// The important caveat about quicksort is that its worst-case performance is O(n2); while this is rare, in naive 
// implementations (choosing the first or last element as pivot) this occurs for sorted data, which is a common case. The 
// most complex issue in quicksort is thus choosing a good pivot element, as consistently poor choices of pivots can 
// result in drastically slower O(n2) performance, but good choice of pivots yields O(n log n) performance, which is 
// asymptotically optimal. For example, if at each step the median is chosen as the pivot then the algorithm works in
// O(n log n). Finding the median, such as by the median of medians selection algorithm is however an O(n) operation on 
// unsorted lists and therefore exacts significant overhead with sorting. In practice choosing a random pivot almost 
// certainly yields O(n log n) performance.

var sortThis = [1,3,4,6,6,2,8,10,9,5]

function quickSort (array) {
	if (array.length === 0 || array.length === 1) {
		return array;
	}

	var pivot = array[Math.floor(Math.random() * array.length)];
	var left = [];
	var right = [];

	for (var i = 0; i < array.length; i++) {
		if (array[i] < pivot) {
			left.push(array[i]);
		} else if (array[i] === pivot) {
			continue;
		} else {
			right.push(array[i]);
		}
	}

	return quickSort(left).concat(pivot, quickSort(right));
};

// Complexity: 
// O(n^2) time O(log n) space but usually O(n log n) for time

// ====================================================================
// Sorting: Merge Sort
// ====================================================================
// Implement a merge sort algorithm.

// Notes: 

// Merge sort takes advantage of the ease of merging already sorted lists into a new sorted list. It starts by comparing 
// every two elements (i.e., 1 with 2, then 3 with 4...) and swapping them if the first should come after the second. It 
// then merges each of the resulting lists of two into lists of four, then merges those lists of four, and so on; until 
// at last two lists are merged into the final sorted list. Of the algorithms described here, this is the first that 
// scales well to very large lists, because its worst-case running time is O(n log n). It is also easily applied to 
// lists, not only arrays, as it only requires sequential access, not random access. However, it has additional O(n) 
// space complexity, and involves a large number of copies in simple implementations.

function mergeSort (array) {
  if (array.length < 2) {
    return array;    	
  }

  var middle = Math.floor(array.length / 2);
  var left   = array.slice(0, middle);
  var right  = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
};
 
function merge(left, right) {
  var result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
        result.push(left.shift());
    } else {
        result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }
  return result;
};
 
// Complexity: 
// O(n log n) time and O(n) space

// ====================================================================
// Sorting: Bubble Sort
// ====================================================================
// Implement a bubble sort algorithm.

function bubbleSort (array) {
  var swapped = true;
  var temp;
  while (swapped) {
    swapped = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i+1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return array 
}
 
// Complexity:
// O(n^2) Time O(1)

// ====================================================================
// Roman Numerals
// ====================================================================
// Implement a roman numeral converter

String.prototype.repeat = function(num) {
  return new Array(num + 1).join(this);
}

function romanNumeral (num) {
  var romanNum = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C' , 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  var romanString = "";
  for (var i = 0; i < romanNum.length; i++) {
  	romanString += romanNum[i][0].repeat(Math.floor(num / romanNum[i][1]));
  	num = num % romanNum[i][1];
  }
  return romanString;
};


// ====================================================================
// Graphs
// ====================================================================
// Graph data structures!

// Vertices (nodes) connected by edges to represent a graph structure.
// Adjacency lists hold edges. Use vertex indexed array of lists so you know which vertices are connected to which.

function Graph (v) {
	this.vertices = v;
	this.edges = 0;
	this.adjList = [];
	this.marked = [];
	this.edgeTo = [];

	for (var i = 0; i < this.vertices; i++) {
		this.adjList[i] = [];
	}

	for (var j = 0; j < this.vertices; j++) {
		this.marked[j] = false;
	}
};

Graph.prototype = {
	addEdge: function(v, w) {
		this.adjList[v].push(w);
		this.adjList[w].push(v);
		this.edges++;
	},

	showGraph: function () {
		var string = '';
		for (var i = 0; i < this.vertices; i++) {
			string += (i + ' --> ');
			for (var j = 0; j < this.vertices; j++) {
				if (this.adjList[i][j] !== undefined) {
					string += (this.adjList[i][j] + ' ');
				}
				console.log(string);
			}
		}
	},

	dfs: function (v) {
		this.marked[v] = true;
		if (this.adjList[v] !== undefined) {
			console.log('Visited vertex: ' + v);
		}

		for (var i = 0; i < this.adjList[v].length; i++) {
			var w = this.adjList[v][i];
			if (!this.marked[w]) {
				this.dfs(w);
			}
		}
	},

	bfs: function(v) {
		var queue = [];
		this.marked[v] = true
		queue.push(v);
		while (queue.length > 0) {
			var next = queue.shift();
			if (next !== undefined) {
				console.log('Visited Vertex: ' + next);
			}

			for (var i = 0; i < this.adjList[next].length; i++) {
				var w = this.adjList[next][i];
				if (!this.marked[w]) {
					queue.push(w);
					this.marked[w] = true;
					this.edgeTo[w] = next;
				}
			}
		}
	},

	pathTo: function (source, v) {
		if (!this.marked[v]) {
			return undefined;
		}
		var path = [];
		for (var i = v; i !== source; i = this.edgeTo[i]) {
			path.push(i);
		}
		path.push(source);
		return path;
	}
};

// Depth First Search: Following a path from the beginning vertex until it reaches the last vertex, then backtracking and 
// following the next path until it reaches the last vertex, and so on until there are no paths left. We are searching to 
// see what paths we can follow in a graph. You use this for topological sorting.

// Breadth First Search: Starts at first vertex and tries to visit vertices closes to the first vertex as possible.
// So it searches layer by layer. This is how you find shortest path.

// ====================================================================
// Binary Search
// ====================================================================
// Implement Binary Search
// Input: sorted array, and a number to find
// Output: index of the number

function binarySearch(array, number) {
	var low = 0;
	var high = array.length - 1;
	var middle = Math.floor(array.length / 2);
	var result;

	function search (newArray, low, middle, high) {
		if (newArray[middle] === number) {
			return result = array.indexOf(newArray[middle]);
		} else if (number < newArray[middle]) {
			high = middle - 1;
			middle 		= Math.floor(newArray.slice(low, high).length / 2);
			search(newArray.slice(low, high), low, middle, high);
		} else {
			low 			= middle + 1;
			middle 		= Math.floor(newArray.slice(low, high).length / 2);
			search(newArray.slice(low, high), low, middle, high); 
		}
	}

	search(array, low, middle, high);
	return result;
};

var searchThis = [1,2,3,4,5,6,7,8,9,10];

// Complexity:
// O(log n) time O(1) space

// ====================================================================
// Trees
// ====================================================================
// Implement a Tree
// Notes:
// A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where 
// each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), 
// with the constraints that no reference is duplicated, and none points to the root.

function Tree (rootNode) {
	this.root = rootNode;
};

function Node (val) {
	this.val = val;
	this.children = {};
};

Node.prototype.refersTo = function (childNode) {
	if (!this.children[childNode.val]) {
		this.children[childNode.val] = childNode;
	}
	return this.children;
};

Tree.prototype.bfs = function (val) {
	var queue = [this.root];
	var result;

	while (queue.length > 0) {
		node = queue.shift();
		console.log('visited: ', node);

		if (node.val === val) {
			return result = node;
		} else if (Object.keys(node.children).length === 0) {
			continue;
		} else {
			for (var child in node.children) {
				queue.push(node.children[child]);
			}
		}
	}
	return result;
};

Tree.prototype.dfs = function (val) {
	var queue = [this.root];
	var result;

	while (queue.length > 0) {
		node = queue.shift();
		console.log('visited: ', node);

		if (node.val === val) {
			return result = node;
		} else if (Object.keys(node.children).length === 0) {
			continue;
		} else {
			for (var child in node.children) {
				queue.unshift(node.children[child]);
			}
		}
	}
	return result;
};

var root = new Node(0);
var tree = new Tree(root);
var child1 = new Node(1);
var child2 = new Node(2);
var child3 = new Node(3);
var child4 = new Node(4);
var child5 = new Node(5);
var child6 = new Node(6);
root.refersTo(child1);
root.refersTo(child2);
child1.refersTo(child3);
child1.refersTo(child4);
child2.refersTo(child5);
child2.refersTo(child6);

// ====================================================================
// Permutations
// ====================================================================

function permute(input) {
	var permutatedArray = [],
  usedChars = [];

	function recurse (input) {
	  var character;
	  for (var i = 0; i < input.length; i++) {
	    character = input.splice(i, 1)[0];
	    usedChars.push(character);
	    if (input.length === 0) {
	      permutatedArray.push(usedChars.slice());
	    }
	    recurse(input);
	    input.splice(i, 0, character); // resets
	    usedChars.pop(); // resets
	  }
	};
	recurse(input);
  return permutatedArray
}

