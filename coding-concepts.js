// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(""))

// a) Your answer: 'B','r','a','v','o',' ','2','0','2','2'
/* b) Verify and explain: 

[
  'B', 'r', 'a', 'v',
  'o', ' ', '2', '0',
  '2', '2'
]

The .split() operator takes a string input and turns it into an array of substrings. The "" within the parentheses indicate to the program to parse every single character, whereas " " would create substrings based off of each "space" in a string.
*/

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student!"
// b) Verify and explain: undefined; The function is being processed but the result is undefined because there is no "return" statement before the temperate literal string.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: [ 8, 10, 12, 14, 16 ] ; The .map() method gives instructions to parse through each element within the array it is being called on, then multiply the value found in that index by 2. The .map() method will return the same length of array as is used for input.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [ 11, 13, 15 ] ; The .filter() method parses the array it is being called on and returns an array that filters out values based on the argument given to it. In this case, the odd numbers are being filtered out using modulo 2 (divided by 2 leaving no remainder).


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: JavaScript ; The log is calling to the zero index inside of the array of values assigned to the languages key inside of the myCodingSkills object. Thus the result is the string Javascript.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: "George", "Bravo", 2022
// b) Verify and explain: Learn { student: 'George', cohort: 'Bravo', year: 2022 } ; The variable learnStudent is instructed to create a new instance of the class Learn and feed it the argument "George" which is passed to the (name) placeholder adjacent to the constructor. The log is then instructed to display everything encompassed in the learnStudent variable. This includes displaying the name of the class and all of the keys with their corresponding values.
