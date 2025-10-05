// Function declaration
    function checkAnswer() {
      // Correct answer
      const correctAnswer = "4";

      // Get the user's selected answer
      const selectedOption = document.querySelector('input[name="quiz"]:checked');

      // Handle case where no answer is selected
      if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
      }

      const userAnswer = selectedOption.value;

      // Compare and provide feedback
      if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
      } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
      }
    }

    // Add event listener to the button
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);