// console.log("Hello, World!");

// Path: index.html
// const message = prompt("Enter a message: ");
const myHeading = document.querySelector('h1');
// myHeading.textContent = message;

// creating variables to perform mathematics operations

// let x = 10;
// let y = 5;

// let addition = x + y;
// console.log(addition);
// alert(addition)

// let subtraction = x - y;
// console.log(subtraction);
// alert(subtraction)

// let multiplication = x * y;
// console.log(multiplication);
// alert(multiplication)

// let division = x / y;
// console.log(division);
// alert(division)


// Conditional Statements

// Grade Ranges
/**
 * 90 - 100: A+
 * 80 - 89: A
 * 70 - 79: A-
 * 60 - 69: B
 * 50 - 59: C
 * 40 - 49: D
 * 0 - 39: F 
 */

// let grade = Number(prompt("Enter your grade: "));

// if (grade >= 90 && grade <= 100) {  // A+
//     myHeading.textContent = "A+";
// } else if (grade >= 80 && grade <= 89) {  // A
//     myHeading.textContent = "A";
// } else if (grade >= 70 && grade <= 79) {  // A-
//     myHeading.textContent = "A-";
// } else if (grade >= 60 && grade <= 69) {  // B
//     myHeading.textContent = "B";
// } else if (grade >= 50 && grade <= 59) {  // C
//     myHeading.textContent = "C";
// } else if (grade >= 40 && grade <= 49) {  // D
//     myHeading.textContent = "D";
// } else if (grade >= 0 && grade <= 39) {  // F
//     myHeading.textContent = "F";
// } else {
//     myHeading.textContent = "Invalid Grade";
// }


// Functions 

function computeGrade(grade) {
    if (grade >= 90 && grade <= 100) {  // A+
        return "A+";
    } else if (grade >= 80 && grade <= 89) {  // A
        return "A";
    } else if (grade >= 70 && grade <= 79) {  // A-
        return "A-";
    } else if (grade >= 60 && grade <= 69) {  // B
        return "B";
    } else if (grade >= 50 && grade <= 59) {  // C
        return "C";
    } else if (grade >= 40 && grade <= 49) {  // D
        return "D";
    } else if (grade >= 0 && grade <= 39) {  // F
        return "F";
    } else {
        return "Invalid Grade";
    }
}

// Events and Event Listeners
const grade = Number(prompt("Enter your grade: "));

document.querySelector('button').onclick = function() {
    myHeading.textContent = computeGrade(grade)
}

// Loops
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}