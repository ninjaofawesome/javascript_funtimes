// Original Code from codewars.com, not sure why this refactoring of 

// function Person(myName, yourName){
// 	return "hello " + myName + ", my name is " yourName;
// }
// technically did not pass, but did work.

function Person(myName, yourName) {
    this.myName = myName;
    this.yourName = yourName;
}

Person.prototype.greet = function fn0() {
    console.log ("Hello " + this.yourName + ", my name is " + this.myName);
};

var me = new Person("Hannah", "Bunny Rabbit");

me.greet();
