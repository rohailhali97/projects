console.log('hello');
// alert('yo')
// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 45;
console.log(someNumber);

//Manipulate DOM with Javascript
/* Its just a fancy way of saying change HTML with Javascript */


// var age = prompt("What is your age?");

// document.getElementById('someText').innerHTML = age;


// Numbers  in Javascript
var num1 = 10;
num1 = num1 + 1; 

// Increment num1 by 1
//num++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, Multiply*, remainder %
console.log(num1 % 5);

// Increment/decrement by any number you want 
num1 += 10; 
console.log(num1);

/* Functions
1.Create a function
2.Call the function
*/

//Create
function fun() {
    console.log('this is a function');
}

// Call
fun();

/* Lets create a function that take in a name and says hello followed by your name

For example

Name: "Rohail"
Return: "Hello Rohail" 
*/
var name = prompt('What is Your Name?');

function greeting(yourName) { //make sure to write a function like this! Clean CODE!
  var name = prompt('What is Your Name?');
  var result = 'Hello' + ' ' + yourName;
  console.log(result);
}
//var name = prompt('What is Your Name?');
//greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
   var result = num1 + num2;
   console.log(num1 + num2); 
}

sumNumbers(10, 10); // doesnt have to just be numbers you can add up words

var num = 0;

while (num < 100){
    num += 1;
    console.log(num);
}

// While loops
var num = 0;

while (num < 100){
    num += 1;
    console.log(num);
}