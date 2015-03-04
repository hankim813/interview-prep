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

// ==========================================================
// HashTable
// ==========================================================

// Hashtable is basically a datastructure to retain values of key-value pair.

// It doesn't allow null for both key and value. You will get NullPointerException if you add null value.
// It is synchronized. So it comes with its cost. Only one thread can access in one time.
// Hashtable<Integer,String>; cityTable = new Hashtable<Integer,String>();
// cityTable.put(1, "Lahore");
// cityTable.put(2, "Karachi");
// cityTable.put(3, null); // NullPointerEcxeption at runtime
 
// System.out.println(cityTable.get(1));
// System.out.println(cityTable.get(2));
// System.out.println(cityTable.get(3));

// ==========================================================
// HashMap
// ==========================================================

// Like Hashtable it also accepts key value pair.

// It allows null for both key and value (only one for key, and multiple for values).
// It is unsynchronized. So comes up with better performance. Not thread safe.

// HashMap<Integer,String> productMap = new HashMap<Integer,String>();
// productMap.put(1, "Keys");
// productMap.put(2, null);

// ==========================================================
// HashSet
// ==========================================================

// HashSet does not allow duplicate values. It provides add method rather put method. You also use its contain method to check whether the object is already available in HashSet. HashSet can be used where you want to maintain a unique list.

// HashSet<String> stateSet = new HashSet<String>();
// stateSet.add ("CA");
// stateSet.add ("WI");
// stateSet.add ("NY");
 
// if (stateSet.contains("PB"))  //if CA, it will not add but shows following message
//      System.out.println("Already found");
// else
//     stateSet.add("PB");

// ==========================================================
// Vertical Scaling
// ==========================================================

// Vertical scaling, or improving the capabilities of a node/server, gives greater capacity to the node but does not decrease the overall load on existing members of the cluster. That is, the ability for the improved node to handle existing load is increased, but the load itself is unchanged. Reasons to scale vertically include increasing IOPS, increasing CPU/RAM capacity, and increasing disk capacity.

// ==========================================================
// Horizontal Scaling
// ==========================================================

// Horizontal scaling, or increasing the number of nodes in the cluster, reduces the responsibilities of each member node by spreading the keyspace wider and providing additional endpoints for client connections. That is, the capacity of each individual node does not change, but its load is decreased. Reasons to scale horizontally include increasing I/O concurrency, reducing the load on existing nodes, and increasing disk capacity.

// ==========================================================
// Profiling Code and identifying performance bottlenecks and access patterns
// ==========================================================

// Check response times of api requests
// Instead of making multiple requests for javascript files or images, you can minify, compress
// Redundant requests
// Refactor

// ==========================================================
// Batch Requests
// ==========================================================

// Minimize messages between client and server to reduces network traffic and provides a smoother, less chatty user interface. Batch requests allow grouping multiple operations, as described in [OData:Core], into a single HTTP request payload.

// ==========================================================
// Load Balancing
// ==========================================================

// In computing, load balancing distributes workloads across multiple computing resources, such as computers, a computer cluster, network links, central processing units or disk drives. Load balancing aims to optimize resource use, maximize throughput, minimize response time, and avoid overload of any single resource. Using multiple components with load balancing instead of a single component may increase reliability through redundancy. Load balancing usually involves dedicated software or hardware, such as a multilayer switch or a Domain Name System server process.

// Load balancing differs from channel bonding in that load balancing divides traffic between network interfaces on a network socket (OSI model layer 4) basis, while channel bonding implies a division of traffic between physical interfaces at a lower level, either per packet (OSI model Layer 3) or on a data link (OSI model Layer 2) basis.

// ==========================================================
// Server Affinity
// ==========================================================

// Server affinity refers to the ability of a load balancer or router to send a user's request to the same server where their session was initiated. If session-failover is supported by the application or networking layout, server affinity is not required, as it doesn't matter which server serves the request.

// ==========================================================
// Connection Pooling
// ==========================================================

// Opening/Closing database connections is an expensive process and hence connection pools improve the performance of execution of commands on a database for which we maintain connection objects in the pool. It facilitates reuse of the same connection object to serve a number of client requests. Every time a client request is received, the pool is searched for an available connection object and it's highly likely that it gets a free connection object. Otherwise, either the incoming requests are queued or a new connection object is created and added to the pool (depending upon how many connections are already there in the pool and how many the particular implementation and configuration can support). As soon as a request finishes using a connection object, the object is given back to the pool from where it's assigned to one of the queued requests (based on what scheduling algorithm the particular connection pool implementation follows for serving queued requests). Since most of the requests are served using existing connection objects only so the connection pooling approach brings down the average time required for the users to wait for establishing the connection to the database.

// ==========================================================
// Data Sharding
// ==========================================================

// When you have servers responsible for holding a subset of the database.


// ==========================================================
// SQL vs NoSQL
// ==========================================================

// Many NoSQL solutions sacrifice ACID(Atomicity, Consistency, Isolation, Durability) compliancy for performance and scalability

// SQL Scaling: Scaling is vertical. In essence, more data means a bigger server, which can get very expensive. It is possible to scale an RDBMS across multiple servers, but this is a difficult and time-consuming process.
// NoSQL Scaling: Scaling is horizontal, meaning across servers. These multiple servers can be cheap commodity hardware or cloud instances, making it alot more cost-effective than vertical scaling. Many NoSQL technologies also distribute data across servers automatically.

// Schemas and Flexibility: 
// SQL: Each record conforms to fixed schema, meaning the columns must be decided and locked before data entry and each row must contain data for each column. This can be amended, but it involves altering the whole database and going offline.
// NoSQL: Schemas are dynamic. Information can be added on the fly, and each ‘row’ (or equivalent) doesn’t have to contain data for each ‘column’.

// The idea that SQL and NoSQL are in direct opposition and competition with each other is flawed one, not in the least because many companies opt to use them concurrently. As with all of the technologies I’ve previously discussed, there really isn’t a ‘one-system-fits-all’ approach; choosing the right technology hinges on the use case. If your data needs are changing rapidly, you need high throughput to handle viral growth, or your data is growing fast and you need to be able to scale out quickly and efficiently, maybe NoSQL is for you. But if the data you have isn’t changing in structure and you’re experiencing moderate, manageable growth, your needs may be best met by SQL technologies. Certainly, SQL is not dead yet.

// ==========================================================
// Data Indexing
// ==========================================================

// A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and storage space to maintain the index data structure.