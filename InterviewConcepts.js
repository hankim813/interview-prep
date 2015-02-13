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

// ==========================================================
// Javascript Inheritance, Prototypal Inheritance
// ==========================================================





