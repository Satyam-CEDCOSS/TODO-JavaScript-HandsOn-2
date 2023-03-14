// 1 Constructing Strings with Variables
const myName = " Satyam Bajpai ";
const myStr = "My name is"+ myName +"and I am well";
 
// 2 Appending Variables to Strings
const someAdjective = "Fun";
let myStr = "Learning to code is ";
myStr += someAdjective

// 3 Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;

// 4 Use Bracket Notation to Find the First Character in a String
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0];

// 5 Understand String Immutabilit
let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World";

// 6 Use Bracket Notation to Find the Nth Character in a String
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2];

// 7 Use Bracket Notation to Find the Last Character in a String
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length-1];

// 8 Use Bracket Notation to Find the Nth-to-Last Character in a String
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2];

// 9 Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const wordBlanks = "The "+myNoun+" was "+myAdjective+" and "+myVerb+" very "+myAdverb;

// 10 Store Multiple Values in one Variable using JavaScript Arrays
const myArray = ["Satyam", 21];

// 11 Nest one Array within Another Array
const myArray = [["Bulls", 23], ["White Sox", 45]];

// 12 Access Array Data with Indexes
const myArray = [50, 60, 70];
let myData = myArray[0]

// 13 Modify Array Data With Indexes
const myArray = [18, 64, 99];
myArray[0] = 45

// 14 Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
const myData = myArray[2][1];

// 15 Manipulate Arrays With push Method
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

// 16 Manipulate Arrays With pop Method
const myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// 17 Manipulate Arrays With shift Method
const myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift(["John", 23])

// 18 Manipulate Arrays With unshift Method
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

// 19 Shopping List
const myList = [["Satyam",1,2,3,4,5],["Satyam",1,2,3,4,5],["Satyam",1,2,3,4,5],["Satyam",1,2,3,4,5],["Satyam",1,2,3,4,5]];

// 20 Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction()

// 21 Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
  }
  functionWithArgs(10,20)

// 22 Return a Value from a Function with Return  
function timesFive(num) {
    return num * 5;
  }

// 23 Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10
var oopsGlobal = 5

function fun1() {
  var oopsGlobal = 5

}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// 24 Local Scope and Functions
function myLocalScope() {
    // Only change code below this line
    let myVar = 10 
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

// 25 Global vs. Local Scope in Functions
// Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();

// 26 Understanding Undefined Value returned from a Function
// Setup
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
addThree();
addFive();

// 27 Assignment with a Returned Value
// Setup
let processed = 2;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7)

// 28 Stand in Line
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));