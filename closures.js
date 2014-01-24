// here is an example of using a closure

var variable = "top-level";

function parentFunction() {
	var variable = "local";
	function childFunction(){
		console.log(variable);
	}
	return childFunction;
}

var child = parentFunction();
child();

// when you do this, child will print "local" to the console.  If you remove the local variable,
// because of scope, child will print out "top-level"!

// Another example:

function makeAddFunction(amount){
	function add(number){
		return number + amount;
	}

	return add;
}

var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);

console.log(addTwo(1) + addFive(2));

// here's what's going on.  when creating addTwo, the number in the parenthesis is the amount.
// So the parent function undestands that amount is two.  Next, there's a child function in 
// parent function which is called when addTwo is invoked.  The parenthesis indicates that
// the child will be getting the number, which in this case is 2.  To get that number out,
// the "return add" is added, which will pass off the result of the child to the parent and thus
// to the outside world.  

// Then do the same for addFive, subbing in five instead of two.  The end result when
// we console log all of that is going to be 10.

