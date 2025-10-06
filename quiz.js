// Step 1: Define the checkAnswer function
function checkAnswer() {
    // Step 2: Identify the correct answer
    const correctAnswer = "4";
    
    // Step 3: Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Step 4: Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
