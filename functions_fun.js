
// This prints out five things in a row. Line by line how it works:
// 1. declare a variable to save the anonymous function, that takes one argument called 
// saying and open a block. 
var sayHooray = function(saying) {
// 2. Once the block is created, set the number where you would like to stop the count.
	var number = 5;
// 3. Set up your for loop, which starts the loop at one number, 
// checks the number in relation to that one, and then adds one to the end to i.
	for(i = 0; i < number; i++) {
// 4. Do whatever you want.  In this case, print the argument and "you did it" to the console.
	console.log(saying + " You did it!");
// 5. close the block.
	}
// 6. close the function.
}
// 7. invoke the function and give it an argument.	
sayHooray("Hooray!");


// This does some maths.
// how it works, line by line.
// 1. establish your named function that takes two arguments, base and exponent, and open a block.
function mathWhiz(base,exponent){
// 2. declare a variable with a count of one.
	var result = 1;
// 3. set up your for loop with the count, the counter that states if count is less than exponent 
// and then to add one to the component each time.
	for(var count = 0; count < exponent; count ++)
// 4. multiply the base times the result number.
		result *= base;
// 5. Return the result number, which will now be whatever the base and result answer will be.
		return result;
// 6. close the block.	
}
// 7.invoke the function with two arguments and print it to the console log.
console.log(mathWhiz(5, 10));

// Try using some if/else statement.
// how it works, line by line:
// 1. Set up a function with one argument and open up a block.
function hannahIsRad(yes) {
// 2. compare the argument to the value set.  If it meets this parameter, do this thing.
	if (yes <= 5)
// 3. The anticipated result.
		return "aww yeah!";
// 4. If that doesn't meet the parameters in the evaluation, try the second thing.
	else
// 5. This is what you'd get in that case.
		return "you could say that.";
// 6. Close the block.

}
// 7.invoke the function with one argument and print it to the console log.
console.log(hannahIsRad(3));


// Make it more complex!
function hannahIsRad(yes) {
	if (yes <= 5 && yes < 8)
		return "aww yeah!";
	else if (yes <= 8 && yes < 12 )
		return "most definitely."
	else
		return "you could say that.";

}

console.log(hannahIsRad(15));


