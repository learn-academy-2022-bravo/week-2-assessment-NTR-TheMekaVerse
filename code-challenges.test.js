// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// ______________________________________________________________




// 1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.


/*

PSEUDO CODE 
Note: There are TWO attempts at achieving the proper code. Initial comments are the first attempt.

 - Create function - divisibleBy3
 - Input: number value
    - Use modulo to determine if input divisible by 3
    - Ex: number value % 3 === 0
 - Expected Output: If true --> "${input} is divisible by 3"
                    If false --> "${input} is not divisible by 3"


Using the code below I continuously received an error from my function: 

describe("divisibleBy3", () => {
    it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
      expect(divisibleBy3(input % 3 === 0)).toEqual("${input} is divisible by three")
      expect(divisibleBy3(input % 3 !== 0)).toEqual("${input} is not divisible by three")
    })
})

 ------------ RED FAILURE ------------------
● divisibleBy3 › takes a number as an argument and decides if the number is evenly divisble by three or not
ReferenceError: divisibleBy3 is not defined


const divisibleBy3 = (input) => {
    if (input % 3 === 0){
        return `${input} is divisible by 3`
    } else {
        return `${input} is not divisible by 3`
    }
}

------------- GREEN FAILURE -----------------

This error is NOT returning green, however it is indicating that the desired output is reached. I'm assuming it is still returning "red" because of the third argument where the function is being passed a negative number?

  console.log
    15 is divisible by 3

      at Object.<anonymous> (week-2-assessment-NTR-TheMekaVerse/code-challenges.test.js:77:9)

  console.log
    0 is divisible by 3

      at Object.<anonymous> (week-2-assessment-NTR-TheMekaVerse/code-challenges.test.js:78:9)

  console.log
    -7 is not divisible by 3

      at Object.<anonymous> (week-2-assessment-NTR-TheMekaVerse/code-challenges.test.js:79:9)

*/



/*    ATTEMPT #2 TO ACHIEVE DESIRED RED-GREEN FAILURES    */

describe("divisibleBy3", () => {
    it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
        const num1 = 15
        const num2 = 0
        const num3 = -7
      expect(divisibleBy3(num1)).toEqual("15 is divisible by three")
      expect(divisibleBy3(num2)).toEqual("0 is divisible by three") 
      expect(divisibleBy3(num3)).toEqual("-7 is not divisible by three") 
    })
})

/* ------------ RED FAILURE ------------------
 ● divisibleBy3 › takes a number as an argument and decides if the number is evenly divisble by three or not
    ReferenceError: divisibleBy3 is not defined
----------------------------------------------- */


// b) Create the function that makes the test pass.

const divisibleBy3 = (input) => {
    if (input % 3 === 0){
        return `${input} is divisible by three`
    } else if (input % 3 !== 0){
        return `${input} is not divisible by three`
    }
}

/* ------------- GREEN FAILURE --------------  
PASS  week-2-assessment-NTR-TheMekaVerse/code-challenges.test.js
  divisibleBy3
    ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
--------------------------------------------- */

/* -----------  REFACTOR -------------------- 

- Removed second if condition to use only else as a catch all.

*/

const divisibleBy3 = (input) => {
    if (input % 3 === 0){
        return `${input} is divisible by three`
    } else {
        return `${input} is not divisible by three`
    }
}

/* -----------  REFACTOR RESULTS -------------------
 PASS  week-2-assessment-NTR-TheMekaVerse/code-challenges.test.js
  divisibleBy3
    ✓ takes a number as an argument and decides if the number is evenly divisble by three or not (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
---------------------------------------------------- */







// 2) Create a function that takes in an array of words and returns an array with all the words capitalized.

/*

PSEUDO CODE 
- Create a function - capitalizeWords
- Input: array of strings
    - Map through array, capitalize index 0 of each string
- Output: New string with all words capitalized 

*/


// a) Create a test with expect statements for each of the variables provided.

describe("capitalizeWords", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
      expect(capitalizeWords(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizeWords(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

/* ------------ RED FAILURE ------------------
● capitalizeWords › takes in an array of words and returns an array with all the words capitalized
ReferenceError: capitalizeWords is not defined
---------------------------------------------- */



// b) Create the function that makes the test pass.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]


const capitalizeWords = (array) => {
    let storageArray = []
        array.forEach((array) => {
            storageArray.push(array.charAt(0).toUpperCase() + array.substr(1)) 
        })
    return storageArray
}

// Decided to use forEach to cause change to the specific index within each element because .map() functions to only return the character/element it is being called on

/* ------------- GREEN FAILURE -------------- 
capitalizeWords
    ✓ takes in an array of words and returns an array with all the words capitalized (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
--------------------------------------------- */

/* -----------  REFACTOR -------------------- 
This one worked me too hard and I need to spend time on the final challenge.
--------------------------------------------- */








// 3) Create a function that takes in a string and logs the index of the first vowel.

/*

PSEUDO CODE 
- Create a function - firstVowel
- Input: a single string
    - Filter through array
    - Search for 'a','e','i','o','u'
- Output: the index of the first vowel within string
    - indexof()

*/

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        const vowelTester2 = "academy"
        const vowelTester3 = "challenges"
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

/* ------------ RED FAILURE ------------------
● firstVowel › takes in a string and logs the index of the first vowel
ReferenceError: firstVowel is not defined
---------------------------------------------- */


// b) Create the function that makes the test pass.
const vowelTester1 = "learn"
const vowelTester2 = "academy"
const vowelTester3 = "challenges"

const firstVowel = (string) => {
    let splitString = string.split("")
    let vowelIndex = splitString.findIndex(value => value === "a" || value === "e" || value === "i" || value === "o" || value === "u")
    return vowelIndex
}

/* ------------- GREEN FAILURE -------------- 
  firstVowel
    ✓ takes in a string and logs the index of the first vowel (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
--------------------------------------------- */


/* -----------  REFACTOR -------------------- 
Removed one variable by combining all methods into one line of code.
--------------------------------------------- */

const firstVowel = (string) => {
    let vowelIndex = string.split("").findIndex(value => value === "a" || value === "e" || value === "i" || value === "o" || value === "u")
    return vowelIndex
}


/* -----------  REFACTOR RESULTS -------------------
firstVowel
✓ takes in a string and logs the index of the first vowel (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
---------------------------------------------------- */

