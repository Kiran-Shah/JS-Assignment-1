//Chapter # 1
//Alert the following

alert("Kiran");
alert("Shah");
alert("kiranshahkiranshah870@gmail.com");
alert("0349-1550097");
alert("jhgfjgdf");

//Correct the statement
alert("You are learning Javascript");

//Code an alert statement of your choice
alert("I am a student at Jawan Pakistan Web and Mobile Hybrid Application course");

//Chap#2
Declare any variable in camel
case

//var firstName;

//Declare a variable of your choice without defining it.then in second statement.assign it string of your choice
var lastName;

lastName = "Shah";
document.write(lastName);
//Declare and alert team name
var teamName = "team JS";
//alert(teamName);

//assign variable a new string
var bestMan = "Charlie";
var bestMan = "John";
document.write(bestMan);

//Chapter #03//
// Declare 
var caseQty;
assign 144
var caseQty = 144;
//Rewrite
var num = "9";

//in one statement declare a variable.In second statement assign it the sum of 2 numbers
var x = 9;
var y = 6;
var z = x + y;

//value of order total
var merchTotal = 100;
var shippingCharge = 10;
var orderTotal = merchTotal + shippingCharge;
document.write(orderTotal);
//declare variable assign a numberin second statement change value of variable by adding it with a number
var a = 8;
var b = a + 2;
document.write(b);

//Chap#04
var productCost = 3.45;
//camelCase
var nameOfBand;
//legally named variable
var _firstNum = 22;
//declaring variable by name
var kiranShah;
//List legal and illegal variables

//Legal
//An identifier must start with $, _, or any character in the Unicode categories“ Uppercase letter(Lu)”, “Lowercase letter(Ll)”, “Titlecase letter(Lt)”, “Modifier letter(Lm)”, “Other letter(Lo)”, or“ Letter number(Nl)”.

//Illegal
//if
for
let
new
try
var
case
else
    null
this
true
void
with
await
break
catch
class
const
    false
super
throw
while
yield
delete
export
import
public
return
static
switch
typeof
default
extends
finally
package
private
continue
debugger

function
arguments
interface
protected
implements
instanceof



//Chap #05
//Modulus
//Value of num
var num = 20 % 6;
document.write(num);
//In single statement declare variable largeNum
var largeNum = 1000 * 2000
document.write(largeNum);
//assign to a variable the value represented by one variable
var e = 25;
var f = 15;
var g = e - f;
document.write(g);
//assign toa variable the remainder when one number
var num = 20 % 8;
document.write(num);
//Code an alert that displays the result of multiplication on 2 numbers
var x = 2 * 5;
alert(x);

//Chap # 06
//short form of x=x+1
x++;
//Fastest way to reduce 100 to 99:
x--; // Assuming x = 100
//var x = 50;
//var y = x++; // y = 50, x = 51
//var y = 50;
var z = --y; // z = 49, y = 49


//Decrement num and assign its original value to newNum:

var num = 10;
var newNum = num--;
//Add 1 to a variable and assign its original value to another variable:

let x = 5;
let originalValue = x++;

//Assign number value to a variable, increment it, and display in alert:

let num = 7;
num++;
alert(num);

//Chap#07
//Value of calculatedNum:


var calculatedNum = 2 + (2 * 6); // calculatedNum = 14

//Value of calculatedNum:


var calculatedNum = (2 + 2) * 6; // calculatedNum = 24

//Value of calculatedNum:


var calculatedNum = (2 + 2) * (4 + 2); // calculatedNum = 24

//Value of calculatedNum:


var calculatedNum = ((2 + 2) * 4) + 2; // calculatedNum = 18

//Statement with parentheses to produce 56:


var cost = (2 + 2) * 4 + 10; // cost = 18

//tatement with parentheses to produce 5:


var pressure = 4 / (2 * 4); // pressure = 0.5

//Chap# 08

//Value of num:


var num = "2" + "2"; // num = "22"

//Value of message and alert:

var message = "Hello," + "Dolly"; // message = "Hello,Dolly"
alert(message);

//Alert displaying concatenation:

alert("33" + 3); // Displays "333"

//Alert concatenation of "Pakistan Zindabad":

alert("Pakistan " + "Zindabad");

//Assign concatenation of a string with a number:


var combined = "The number is " + 42;

//Assign concatenation of two string variables:

var firstName = "John";
var lastName = "Doe";
var fullName = firstName + " " + lastName;

//Chap #09----------------------------------------------
//(Prompts)

//for first name:

var firstName = prompt("Enter first name");

//prompt for country with default answer:


var country = prompt("Country?", "China");

//Correct this statement:

var yourName = prompt("Enter Your Name");

//Prompt with a default input:

var response = prompt("Enter your city", "Default City");

//Prompt with the first variable as the message and the second as default response:

var message = "Enter your name";

//Display prompt and response in an alert:


var city = prompt("Enter your city", "Default City");
alert("You entered: " + city);

//Chapter 10 (if Statements)

//Correct this statement:


var city = "Karachi";
if (city === "Karachi") {
    console.log("The City Of Lights");
}

//Complete the if statement:

if (x === y) {
    var z = prompt("Value of z?");
}
//Code an if statement to check ZipCode:


var zipCode = "10010";
if (zipCode === "10010") {
    alert("Karachi");
} else {
    alert("Please write correct city");
}

//If statement to test and assign a new value:


var x = 5;
if (x === 5) {
    x = 10;
}

//Chapter 11 (Comparison Operators)

//First line of if statement testing inequality:

if (a !== b)

//First line of if statement testing greater than or equal:


    if (a >= b)

    //If statement testing inequality and assigning a number:

        if (x !== 10) {
            x = 20;
        }
        //If statement testing inequality and displaying a congratulatory alert:


if (a !== b) {
    alert("Congratulations!");
}
//Prompt for first name and if statement checking name inequality:

var enteredName = prompt("Enter your first name");
if (enteredName !== "YourName") {
    alert("No match");
}

//Chapter 12 (if…else and else if Statements)
//If statement testing and displaying alerts:


if (a >= b) {
    alert("Value is greater than or equal");
} else {
    alert("Value is less than");
}

//Marksheet program:


var marks = prompt("Enter your marks");
var percentage = (marks / 100) * 100;
if (percentage >= 90) {
    alert("Grade A");
} else if (percentage >= 80) {
    alert("Grade B");
} else if (percentage >= 70) {
    alert("Grade C");
} else {
    alert("Grade D");
}
//If statement with alert for incorrect value of a:

if (a === 10) {
    alert("a is 10");
} else {
    alert("The correct value of a is 10");
}

//Prompt for city with multiple conditions:


var city = prompt("Enter a city");
if (city === "Karachi") {
    alert("It's Karachi");
} else if (city === "Lahore") {
    alert("It's Lahore");
} else {
    alert("City not recognized");
}

//Chapter 13 (Testing Sets of Conditions)


//If statement testing both conditiond
if (a === b && c === d)

//If statement testing either condition:

    if (a === b || c !== d)

    //If statement with two conditions:

        if (name === "Kiran" || name === "Abeer" && age < 60)

        //Declare two variables and test conditions:

            var num1 = 5;
var num2 = 10;
if (num1 < num2 || num1 > num2) {
    alert("Condition met");
}

//Prompt for first and last names and compare:

var firstName = "John";
var lastName = "Doe";
var enteredFirstName = prompt("Enter your first name");
var enteredLastName = prompt("Enter your last name");
if (enteredFirstName === firstName && enteredLastName === lastName) {
    alert("Names match");
}

//Chapter 14 (Nested if Statements)

//Nested if statement for password validation:

var password = prompt("Enter your password");
if (password !== "") {
    if (password.length > 5) {
        alert("OK");
    } else {




        
        alert("Password must be greater than 5");
    }
}

//Nested if statement example:


if (a === 1) {
    if (c === "Max") {
        alert("OK");
    }
}

//Avoid nesting with multiple conditions:

if (a === 1 && c === "Max") {
    alert("OK");
}

//Declare two variables and test conditions:


var var1 = 5;
var var2 = 5;
if (var1 === var2 && var1 <= var2) {
    alert("Conditions met");
}

//Chapter 15 (Array I)

//Declare an empty array:

var myArray = [];

//Code an array with one string element:

var myArray = ["Hello"];

//Print the letter “j” using array index:

var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

//Find the total length of the array:


var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
alert(alphabet.length); // 8

//Declare an array with one element and add a second element:


var myArray = ["First Element"];
myArray[1] = "Second Element";
alert(myArray[1]);

//Chapter 16 (Array II)

//Add an element to the array using push and alert the last element:


var myArray = ["Hello"];
myArray.push("World");
alert(myArray[1]);

//Remove the last element from the array:


var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();

//Add a number to the end of an array:


var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(5);

//Chapter 16 (Array III)
//Remove the first element of an array:


var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

//Add three numbers to the beginning of an array:


var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

//Declare an array, add an element to the beginning, and alert the new first element:


var myArray = ["Second"];
myArray.unshift("First");
alert(myArray[0]);

//Insert "L" between "M" and "XL":


var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");

//Copy the first 3 sizes into a new array:


var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);

//Add 2 elements after "dog" and remove "cat", "ox", and "duck":


var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "rabbit", "hamster");

//Remove "cat" and "ox":


var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 2);

//Reduce the array to "duck" and "frog" using slice:


var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5); // ["duck", "frog"]

//



Chapter 17 - 20 (for Loops)
1. Loop running 10 times:
    
    for (let i = 0; i < 10; i++) {
        
    }
    

2. For loop running 12 times with
    for (let i = 0; i <= 11; i++) {
    }
    

3. Missing characters:
    
    for(i=0;i<=4;i++)
    

4. For loop with a different counter name:
    for (let count = 0; count < 100; count++) {
    }
   
5. For loop with decrement:
    for (let i = 3; i > 0; i--) {
    }
    

6. Number of elements in an array:
    
    let count = array.length;

7. Set a boolean flag:
    let flag = true;
    

8. For loop limited by the number of array elements:
    let pets = ["dog", "cat", "ox", "duck", "frog"];
    for (let i = 0; i < pets.length; i++) {
        
    }

9. For loop with break on second iteration:
    
    for (let i = 0; i < 10; i++) {
        if (i === 1) {
            alert(i);
            break;
        }
    }

10. Array of user names with prompt and for loop:
    
    let userNames = ["John", "Jane", "Doe"];
    let firstName = prompt("Enter first name");

    for (let i = 0; i < userNames.length; i++) {
        if (firstName === userNames[i]) {
            alert("Enter");
            break;
        }
    }
    if (!userNames.includes(firstName)) {
        alert("Please write correct user name");
    }
    

11. Complete code for match not found:
    var matchFound = false;
    for (var i = 0; i < list.length; i++) {
        if (userInput === list[i]) {
            alert("Match found");
            matchFound = true;
            break;
        }
    }
    if (!matchFound) {
        alert("No match found");
    }

12. Nested loops with concatenation:
    let firstArr = ["a", "b", "c", "d", "e", "f"];
    let secondArr = [1, 2, 3, 4, 5, 6];

    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            console.log(firstArr[i] + secondArr[j]);
        }
    }
