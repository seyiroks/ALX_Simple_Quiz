// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";
    
    // Step 3: Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selectedOption.value;
    
    // Step 4: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Correct answer feedback
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // Incorrect answer feedback
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Retrieve the submit button and add an event listener
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
