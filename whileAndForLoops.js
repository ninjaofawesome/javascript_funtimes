// WHILE LOOPS
// 1. define your number and your counter on the loop.

var number = 0;
var counter = 0;

// 2. set up your loop, in the parentheses will define how many times you want to loop.
// 3. Figure out what you want the loop to do (e.g. console.log)
// 4. increase the number on your counter and on your number.
while (counter < 10) {
	console.log("Hannah is a JavaScript ninja!");
	var number = number + 1;
	var counter = counter +1;
}

// This will return to the console "Hannah is a JavaScript ninja!" ten times.

// This is the same thing, but in a FOR loop.

// 1. set up your counter

for (counter = 0; counter < 10; counter = counter++){
	console.log("Hannah is a JavaScript ninja!");
	counter ++;
}
