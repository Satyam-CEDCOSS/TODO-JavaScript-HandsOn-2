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

