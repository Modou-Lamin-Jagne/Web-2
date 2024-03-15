console.log("Hello, World!");

// Path: index.html
const message = prompt("Enter a message: ");
const myHeading = document.querySelector('h1');
myHeading.textContent = message;