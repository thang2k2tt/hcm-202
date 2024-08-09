document.addEventListener("DOMContentLoaded", function () {
  const quizContent = document.getElementById("quiz-content");
  const navButtons = document.getElementById("nav-buttons");
  const finishAttemptButton = document.querySelector(".finish-attempt");

  // Shuffle the questions array and select 15 random questions
  function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }

  // Shuffle questions and select the first 15
  const selectedQuestions = shuffle(questions).slice(0, 15);

  selectedQuestions.forEach((question, index) => {
      // Create question block
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionText = document.createElement("p");
      questionText.classList.add("question-text");
      questionText.innerHTML = `<strong>Question ${index + 1}</strong><br>${question.question}`;
      questionDiv.appendChild(questionText);

      // Create form for answers
      const form = document.createElement("form");
      form.classList.add("question-form");

      question.answers.forEach((answer, i) => {
          const input = document.createElement("input");
          input.type = "radio";
          input.id = `question${index + 1}_option${i + 1}`;
          input.name = `question${index + 1}`;
          input.value = answer.correct; // Store whether the answer is correct or not

          const label = document.createElement("label");
          label.setAttribute("for", input.id);
          label.textContent = answer.text;

          form.appendChild(input);
          form.appendChild(label);
          form.appendChild(document.createElement("br"));
      });

      questionDiv.appendChild(form);
      quizContent.appendChild(questionDiv);

      // Create navigation buttons
      const navButton = document.createElement("button");
      navButton.textContent = index + 1;
      navButton.addEventListener("click", function () {
          window.scrollTo({
              top: questionDiv.offsetTop,
              behavior: "smooth"
          });
      });

      navButtons.appendChild(navButton);
  });

  // Finish attempt button click event
  finishAttemptButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      let allAnswered = true;

      // Check if all questions are answered
      selectedQuestions.forEach((question, index) => {
          const form = document.querySelectorAll(".question-form")[index];
          const selected = form.querySelector('input[type="radio"]:checked');

          if (!selected) {
              allAnswered = false;
              window.scrollTo({
                  top: form.parentElement.offsetTop,
                  behavior: "smooth"
              });
              return false;
          }
      });

      // If all questions are answered, evaluate the answers
      if (allAnswered) {
          selectedQuestions.forEach((question, index) => {
              const form = document.querySelectorAll(".question-form")[index];
              const selected = form.querySelector('input[type="radio"]:checked');
              const correctAnswer = question.answers.find(answer => answer.correct).text;

              const result = document.createElement("p");
              result.classList.add("result");

              if (selected.value === "true") {
                  result.textContent = "Correct!";
                  result.style.color = "green";
              } else {
                  result.textContent = `Incorrect! The correct answer is: ${correctAnswer}`;
                  result.style.color = "red";
              }

              form.parentElement.appendChild(result);
          });

          // Optionally, disable further changes to the form after finishing
          document.querySelectorAll('input[type="radio"]').forEach(input => {
              input.disabled = true;
          });

          // Scroll to the top to show the results
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          });
      }
  });
});
