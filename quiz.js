// quiz.js

// Function to check the user's answer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user’s selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (!selectedOption) {
        // If no option is selected, give feedback
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }
    const userAnswer = selectedOption.value;

    // Compare the user’s answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the Submit Answer button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
