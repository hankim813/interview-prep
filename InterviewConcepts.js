// Concepts to Know


// ==========================================================
// Closures
// ==========================================================
// 
	// Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the 	 environment in which it was created. 

	// Example 1
	function makeFunc () {
	  var name = "Mozilla";
	  function displayName () {
	    alert(name);
	  }
	  return displayName;
	}

	var myFunc = makeFunc();
	myFunc();

	// Example 2
	function makeAdder(x) {
	  return function(y) {
	    return x + y;
	  };
	}

	var add5 = makeAdder(5);
	var add10 = makeAdder(10);

	console.log(add5(2));  // 7 // It's like function(2) { return 5 + 2 } It remembers what x is because of closure.
	console.log(add10(2)); // 12 // Think of IIFE


// ==========================================================
// Hoisting
// ==========================================================

	// JavaScript Declarations are Hoisted
	// In JavaScript, a variable can be declared after it has been used.
	// In other words; a variable can be used before it has been declared.
	// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)
	// Declared variables are created before any code is executed. Undeclared variables do not exist until the code assigning to them is executed.

	function x() {
	  y = 1;   // Throws a ReferenceError in strict mode
	  var z = 2;
	}

	x();

	console.log(y); // logs "1" 
	console.log(z); // Throws a ReferenceError: z is not defined outside x

	// Function expressions or anonymous functions are hoisted to the top
	// Function declarations or functions with 'var' are not hoisted

// ==========================================================
// Trees
// ==========================================================

// ==========================================================
// Linked Lists / Doubly Linked Lists
// ==========================================================

// ==========================================================
// Big O
// ==========================================================

// ==========================================================
// Classes, Objects
// ==========================================================

// ==========================================================
// Internet and HTTP 
// ==========================================================

	// Enter URL (human legible IP Address) in client. Send HTTP request through router. Router sends to DNS. DNS finds server. Server interact with DB. Sends back to client through same route. 

	// HTTP is Hypertext Transfer Protocol. A set of rules for transferring files (text, graphic images, sound, video, and other multimedia files) on the World Wide Web. As soon as a Web user opens their Web browser, the user is indirectly making use of HTTP. Includes Headers, Body, Request Body, Response, etc. 

// ==========================================================
// Caching
// ==========================================================

// Alleviate load on database queries, improving performance as it's faster.
// Eviction Factor = x * cache size | ie. factor of 0.8f with cache size of = 0.8 * 4 = 3

// Least Recently Used (LRU)

// Doubly Linked List and Hash Table. Hash Table has a key that is the reference id, and then value being the index of the array holding the doubly linked lists. O(1) look up time, and worst case O(n) when looking through the linked list. Basically, the hashing function is as follows: if the cache size limit is reached, pop off the end of the list and append the new reference to the front. If the reference already exists, update it by putting it to the front of the list. 

// Least Frequently Used (LFU)

// Doubly Linked List and Hash Table. Same set up as before except that the hashing function will assign nodes by frequencies. The indices of the array holding the nodes will be representative of the frequencies of the requests. If cache size if 4, the max frequency is 4. If there is a doubly linked list on index 3 of the array, and you request something on that list again, update the list and put the new request node to the head.

// ==========================================================
// Javascript Inheritance, Prototypal Inheritance
// ==========================================================


// ==========================================================
// General Tips
// ==========================================================

// If a question wants you to optimize a complexity, usually you can sacrifice the other to do so.


// ==========================================================
// Backburner Topics
// ==========================================================
// HTTP request caching(proxy servers, etc.), enhanced server caching (memcached, etc.), progressive CSS/JS/image loading. DB Shards

