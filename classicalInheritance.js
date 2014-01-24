//Create the parent class:

function School() {}

//get the parent class to do something
School.prototype.ringBell = function(){
	console.log(“Ring!”);
}

//Create a new object
var myPonySchool = new School();

//get that pony to do something!
myPonySchool.ringBell();

//get the child linked up with the parent
function Kindergarten() {
	School.call(this);
}

//link up all the methods to the parent class
Kindergarten.prototype =new School();

//Get the kindergarted constructors set to kindergarten
Kindergarten.prototype.constructor = Kindergarten;

//ring the bell!
var horseSchool = new Kindergarten();

horseSchool.ringBell();

returns ringbell!

//teach kindergarten to do something new
Kindergarten.prototype.snacks = function() {
	console.log(“nom nom”);
}

//Get the horseschool to eat snacks
horseSchool.snacks();