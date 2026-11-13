
// ========================================
// WEEK 10: JS BASICS & CONTROL FLOW
// Student: Sumit Sarraf
// ========================================


// PART 1: TIME-BASED GREETING

// Ask the user for their name
let userName = prompt("What is your name?");

// Get the current hour
let currentHour = new Date().getHours();

// Check the time and display a greeting
if (currentHour < 12) {

    console.log("Good morning, " + userName + "!");

} else if (currentHour < 18) {

    console.log("Good afternoon, " + userName + "!");

} else {

    console.log("Good evening, " + userName + "!");

}


// PART 2: AGE AND DAYS LIVED VERIFICATION

// Ask the user for their birth year
let birthYear = Number(prompt("What year were you born?"));

// Get the current year
let currentYear = new Date().getFullYear();

// Calculate the user's age
let age = currentYear - birthYear;

// Calculate approximate days lived
let daysLived = age * 365;

// Display approximate days lived
console.log(
    "You have lived for approximately " + daysLived + " days!"
);

// Check whether the user is an adult or minor
if (age >= 18) {

    console.log("You are an adult.");

} else {

    console.log("You are a minor.");

}


// ========================================
// WEEK 11: DOM & DYNAMIC EVENT HANDLING
// DARK MODE TOGGLE
// ========================================

let themeButton = document.querySelector("#theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

    });

}
