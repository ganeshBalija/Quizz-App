const questions = [
  {
    question: "What is the capital of France?",
    answer: [
      { text: "Paris", correct: "true" },
      { text: "Europe", correct: "false" },
      { text: "Japan", correct: "false" },
      { text: "Marseille", correct: "false" },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: [
      { text: "Earth", correct: "false" },
      { text: "Mars", correct: "false" },
      { text: "Jupiter", correct: "true" },
      { text: "Saturn", correct: "false" },
    ],
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: [
      { text: "Charles Dickens", correct: "false" },
      { text: "Mark Twain", correct: "false" },
      { text: "George Orwell", correct: "false" },
      { text: "William Shakespeare", correct: "true" },
    ],
  },
  {
    question: "Which element is said to keep bones strong and healthy?",
    answer: [
      { text: "Calcium", correct: "true" },
      { text: "Oxygen", correct: "false" },
      { text: "Iron", correct: "false" },
      { text: "Sodium", correct: "false" },
    ],
  },
  {
    question: "Which country is known as the Land of the Rising Sun?",
    answer: [
      { text: "China", correct: "false" },
      { text: "Japan", correct: "true" },
      { text: "South Korea", correct: "false" },
      { text: "India", correct: "false" },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: [
      { text: "Ag", correct: "false" },
      { text: "Au", correct: "true" },
      { text: "Fe", correct: "false" },
      { text: "Hg", correct: "false" },
    ],
  },
  {
    question: "What is the square root of 144?",
    answer: [
      { text: "10", correct: "false" },
      { text: "8", correct: "false" },
      { text: "12", correct: "true" },
      { text: "14", correct: "false" },
    ],
  },
  {
    question: "In which year did World War II end?",
    answer: [
      { text: "1939", correct: "false" },
      { text: "1945", correct: "true" },
      { text: "1941", correct: "false" },
      { text: "1950", correct: "false" },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const next = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  next.style.display = "none"; 
  showQuestions();
}

function showQuestions() {
  answerElement.innerHTML = "";

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach(ans => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("answers");

    button.addEventListener("click", () => selectAnswer(button, ans));

    answerElement.appendChild(button);
  });
}

function selectAnswer(button, answer) {
  const allButtons = answerElement.querySelectorAll(".answers");
  allButtons.forEach(btn => {
    btn.disabled = true; 
  });

  const isCorrect = answer.correct === "true";

  if (isCorrect) {
    button.style.backgroundColor = "green"; 
    score++;
  } else {
    button.style.backgroundColor = "red"; 
  }

  next.style.display = "block";
}

next.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    next.style.display = "none";
    showQuestions(); 
  } else {
    showScore();
  }
});

function showScore() {
  let message;

  if (score <= 3) {
    message = " 🤞😉 Better luck next time 🤞😉";
  } else if (score <= 5) {
    message = "Good job👍🙂";
  } else {
      message = "❤️❤️ Wow Excellent❤️❤️";
  }

  questionElement.innerHTML = `Quiz Finished! You scored ${score} out of ${questions.length}.<br>
 <br>${message}`;
  answerElement.innerHTML = ""; 
  next.style.display = "none"; 
}
startQuiz();
