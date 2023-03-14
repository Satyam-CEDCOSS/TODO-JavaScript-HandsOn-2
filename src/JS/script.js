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