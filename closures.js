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
// because of scope, child will print out "top-level" thanks to scope!