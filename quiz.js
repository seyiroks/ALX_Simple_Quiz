// Define the function
function checkAnswer() {
    // Correct answer retrieval
    const correctAnswer = "4";

    // Retrieve user’s selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption.value;

    // Compare and provide feedback
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Retrieve the submit button
const submitButton = document.getElementById("submit-answer");

// Add event listener to the button
submitButton.addEventListener("click", checkAnswer);
