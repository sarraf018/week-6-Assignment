
/* ========================================
   WEEK 10: JS BASICS & CONTROL FLOW
   STUDENT: SUMIT SARRAF
======================================== */


/* PART 1: TIME-BASED GREETING */

let userName = prompt("What is your name?");

let currentHour = new Date().getHours();

if (currentHour < 12) {

    console.log("Good morning, " + userName + "!");

} else if (currentHour < 18) {

    console.log("Good afternoon, " + userName + "!");

} else {

    console.log("Good evening, " + userName + "!");

}


/* PART 2: AGE AND DAYS LIVED */

let birthYear = Number(prompt("What year were you born?"));

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

let daysLived = age * 365;

if (
    Number.isInteger(birthYear) &&
    birthYear > 0 &&
    birthYear <= currentYear
) {

    console.log(
        "You have lived for approximately " + daysLived + " days!"
    );

    if (age >= 18) {

        console.log("You are an adult.");

    } else {

        console.log("You are a minor.");

    }

} else {

    console.log("Please enter a valid birth year.");

}


/* ========================================
   WEEK 11: DARK MODE TOGGLE
======================================== */

const themeButton = document.querySelector("#theme-toggle");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "Light Mode";

        } else {

            themeButton.textContent = "Toggle Dark Mode";

        }

    });

}


/* ========================================
   WEEK 12: ARRAYS AND LOOPS
   HOBBY LIST
======================================== */

// Step 1: Create an array of hobbies

const hobbies = [
    "Photography",
    "Playing Football",
    "Traveling",
    "Exploring Technology",
    "Creating Digital Content"
];


// Step 2: Find the HTML container

const listContainer = document.getElementById("hobby-list");


// Step 3: Create an unordered list

const ul = document.createElement("ul");


// Step 4: Use a for loop to display every hobby

for (let i = 0; i < hobbies.length; i++) {

    const li = document.createElement("li");

    li.textContent = hobbies[i];

    ul.appendChild(li);

}


// Step 5: Display the list on the webpage

if (listContainer) {

    listContainer.appendChild(ul);

}


/* ========================================
   WEEK 12: FIVE-PHOTO GALLERY
   OPTIONAL EXTENSION
======================================== */

// Step 1: Create an array containing five image URLs

const images = [

    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1000",

    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",

    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000",

    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000",

    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1000"

];


// Step 2: Start with the first image

let currentIndex = 0;


// Step 3: Find the gallery elements

const galleryImage = document.getElementById("gallery-image");

const nextButton = document.getElementById("next-photo");

const photoCounter = document.getElementById("photo-counter");


// Step 4: Check that the gallery elements exist

if (galleryImage && nextButton && photoCounter) {

    // Function to display the selected image

    function showPhoto() {

        galleryImage.src = images[currentIndex];

        galleryImage.alt =
            "Gallery photo " + (currentIndex + 1);

        photoCounter.textContent =
            "Photo " + (currentIndex + 1) +
            " of " + images.length;

    }


    // Step 5: Check whether an image fails to load

    galleryImage.addEventListener("error", function() {

        console.error(
            "Image could not be loaded: " + images[currentIndex]
        );

        photoCounter.textContent =
            "Unable to load photo " + (currentIndex + 1);

    });


    // Step 6: Add the Next Photo click event

    nextButton.addEventListener("click", function() {

        currentIndex++;

        // Return to the first image after the last image

        if (currentIndex >= images.length) {

            currentIndex = 0;

        }

        showPhoto();

    });


    // Step 7: Display the first image

    showPhoto();

}
