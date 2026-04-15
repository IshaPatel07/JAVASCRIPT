const questionList = [
  {
    question:
      "Which gas do plants primarily absorb from the atmosphere during photosynthesis?",
    options: {
      A: "Oxygen",
      B: "Nitrogen",
      C: "Carbon Dioxide",
      D: "Hydrogen",
    },
    answer: "C",
    explanation:
      "Plants take in carbon dioxide and release oxygen during the process of making their own food.",
  },
  {
    question: "Who was the first person to step onto the surface of the Moon?",
    options: {
      A: "Yuri Gagarin",
      B: "Neil Armstrong",
      C: "Buzz Aldrin",
      D: "Elon Musk",
    },
    answer: "B",
    explanation:
      "Neil Armstrong became the first human to walk on the moon on July 20, 1969.",
  },
  {
    question: "Which is the largest ocean on Earth?",
    options: {
      A: "Atlantic Ocean",
      B: "Indian Ocean",
      C: "Arctic Ocean",
      D: "Pacific Ocean",
    },
    answer: "D",
    explanation:
      "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions.",
  },
  {
    question: "How many continents are there on Earth?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
    },
    answer: "C",
    explanation:
      "The seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
  },
  {
    question: "Which organ in the human body pumps blood?",
    options: {
      A: "Lungs",
      B: "Brain",
      C: "Kidneys",
      D: "Heart",
    },
    answer: "D",
    explanation:
      "The heart acts as a pump that circulates blood throughout the entire body.",
  },
  {
    question: "What is the capital city of France?",
    options: {
      A: "London",
      B: "Berlin",
      C: "Paris",
      D: "Rome",
    },
    answer: "C",
    explanation: "Paris is the capital and most populous city of France.",
  },
  {
    question: "Which of these is the hardest natural substance found on Earth?",
    options: {
      A: "Gold",
      B: "Iron",
      C: "Diamond",
      D: "Graphite",
    },
    answer: "C",
    explanation:
      "Diamond is a solid form of the element carbon and is the hardest known natural mineral.",
  },
  {
    question: "Which animal is known as the 'Ship of the Desert'?",
    options: {
      A: "Horse",
      B: "Camel",
      C: "Elephant",
      D: "Donkey",
    },
    answer: "B",
    explanation:
      "Camels are called the ship of the desert because they can travel across hot sands for long periods without water.",
  },
  {
    question: "In which direction does the Sun rise?",
    options: {
      A: "North",
      B: "South",
      C: "East",
      D: "West",
    },
    answer: "C",
    explanation:
      "The Earth rotates from West to East, which makes the Sun appear to rise in the East.",
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: {
      A: "50°C",
      B: "90°C",
      C: "100°C",
      D: "120°C",
    },
    answer: "C",
    explanation:
      "At standard atmospheric pressure, pure water boils at 100 degrees Celsius.",
  },
];

const timer = document.getElementById("timer");

const questionIndex = document.getElementById("question-index");
const questions = document.getElementById("questions");

const optionA = document.getElementById("option-A");
const optionB = document.getElementById("option-B");
const optionC = document.getElementById("option-C");
const optionD = document.getElementById("option-D");

const optBoxA = document.getElementById("opt-box-A");
const optBoxB = document.getElementById("opt-box-B");
const optBoxC = document.getElementById("opt-box-C");
const optBoxD = document.getElementById("opt-box-D");

const nextBtn = document.getElementById("next-button");

let currentIndex = 0;
let timeCounter = 60;
let intervalId;
let ansList = [];
let score = 0;

function displayQuestions() {
  if (currentIndex > questionList.length - 1) {
    // console.log("------");
    nextBtn.textContent = "Submitt";
    clearInterval(intervalId);
  } else {
    startTimer();
    questionIndex.textContent = "Q ." + (currentIndex + 1);
    questions.textContent = questionList[currentIndex].question;

    optionA.textContent = questionList[currentIndex].options.A;
    optionB.textContent = questionList[currentIndex].options.B;
    optionC.textContent = questionList[currentIndex].options.C;
    optionD.textContent = questionList[currentIndex].options.D;
  }
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questionList.length) {
    displayQuestions();
    if (currentIndex == questionList.length - 1) {
      nextBtn.textContent = "Submitt";
    }
  } else {
    scoreCounter();
  }
});

function startTimer() {
  clearInterval(intervalId);
  timeCounter = 60;
  intervalId = setInterval(() => {
    timeCounter--;
    timer.textContent = timeCounter;
    if (timeCounter <= 0) {
      currentIndex++;
      displayQuestions();
    }
  }, 1000);
}

function scoreCounter() {
  questionList.forEach((que, i) => {
    if (que.answer == ansList[i]) {
      score++;
    }
  });
  console.log(score);
}

optBoxA.addEventListener("click", () => {
  ansList.push("A");
});
optBoxB.addEventListener("click", () => {
  ansList.push("B");
});
optBoxC.addEventListener("click", () => {
  ansList.push("C");
});
optBoxD.addEventListener("click", () => {
  ansList.push("D");
});

displayQuestions();
