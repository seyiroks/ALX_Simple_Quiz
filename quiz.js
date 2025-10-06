/**
 * Creates a JavaScript function named checkAnswer for a quiz application 
 * that checks if the user’s selected answer is correct and displays 
 * appropriate feedback. It also adds an event listener to the 
 * “Submit Answer” button to invoke this function when clicked.
 */

// Start with the Function Declaration: Define a function named checkAnswer.
function checkAnswer() {
    // Identify the Correct Answer: Declare a variable named correctAnswer 
    // and assign it the string value "4".
    const correctAnswer = "4";

    // Retrieve the User’s Answer: Use document.querySelector to select 
    // the checked radio button and access its value property.
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an option was actually selected
    if (selectedChoice) {
        const userAnswer = selectedChoice.value;
        
        // Retrieve the feedback paragraph element
        const feedbackElement = document.getElementById("feedback");

        // Compare the User’s Answer with the Correct Answer: Implement an if statement.
        if (userAnswer === correctAnswer) {
            // If correct, change the textContent to "Correct! Well done."
            feedbackElement.textContent = "Correct! Well done.";
            // Optional: change color to green for success
            feedbackElement.style.color = "green"; 
        } else {
            // If incorrect, update the textContent to "That's incorrect. Try again!"
            feedbackElement.textContent = "That's incorrect. Try again!";
            // Optional: change color to red for failure
            feedbackElement.style.color = "red";
        }
    } else {
        // Handle case where no choice is selected
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        document.getElementById("feedback").style.color = "orange";
    }
}

// Add an Event Listener to the Submit Button: 
// Use document.getElementById to select the button and add a click event listener.
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener('click', checkAnswer); // Note: No () after checkAnswer
