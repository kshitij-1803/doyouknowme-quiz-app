var readlineSync = require('readline-sync');
 
var userName = readlineSync.question("What's your name? ");
console.log('Hi ' + userName + ' welcome to DO YOU KNOW Kshitij?\n');

var score = 0;
var questions =[ {
  question: "Who is my favorite superhero? ",
  answer: "Batman"
  },
  {
  question: "Where do I live? (Hint: The city of lakes) ",
  answer: "Bhopal"
  },
  {
  question: "Which is my favorite sad song? ",
  answer: "Channa Meraya"
  },
  {
  question: "What is my favorite TV show? ",
  answer: "Breaking Bad"
  },
  {
  question: "What does my name mean? ",
  answer: "Horizon"
  }
];

var highScores = [
  {
    name: "Kshitij",
    score: 10,
  },

  {
    name: "Arjun",
    score: 8,
  },

  {
    name: "Karan",
    score: 6,
  },
]

function play(question, answer){
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer.toUpperCase()){
    console.log("You are right");
    score = score + 2;
  }
  else {
    console.log("Oops! Wrong answer, Try Again");
    // score = score - 1;
  }

  console.log("current score ", score);
  console.log("-------------------");
}

for( i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("\nYour final score is ", score);
console.log();
console.log("--------------------------");
console.log("       High Scores        ");
console.log("--------------------------");
for( i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name, " - ", highScores[i].score);
}
