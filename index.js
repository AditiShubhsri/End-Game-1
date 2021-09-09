var readlineSync = require("readline-sync");
const chalk = require("chalk");
var userName = readlineSync.question("Whats your name? ")
console.log("Welcome "+ userName+" to DO YOU KNOW ADITI??")

var score = 0



function play(question, answer){
  var userAnswer = readlineSync.question(question);
   if (userAnswer.toUpperCase() === answer.toUpperCase()){
     console.log("Right!")
     score = score + 1
   }
   else{
     console.log("Wrong :( ")
   }

   console.log("current score is ", score)
   console.log("------------")
}


var qna =[

 {
  q : chalk.bgYellow("Where do I live?"),
  a : "Agra",
},

{
  q : chalk.bgCyan("Whats my favourite book?"),
  a : "Percy Jackson",
},
{
  q : chalk.bgRed("Whats my favourite hobby?"),
  a : "Calligraphy",

},
{
  q : chalk.bgMagenta("Whats my favourite vegetable?"),
  a : "Potato"
},

];


var highScores =[
  {
  name : "Aditi",
  score : 4,
},

{
  name : "Sanchika",
  score : 3,
},
];



for(var i = 0; i< qna.length ; i = i+1)
{
  play(qna[i].q, qna[i].a)
}


function highscore(high){

  console.log("YAY YOUR SCORE IS ", score)
  console.log("Check out the high scores");
  for(var i = 0;i<highScores.length;i++)
  {

console.log(highScores[i].name, highScores[i].score);

  }
  console.log("If you score more, make sure to ping me and i will update the score!");

  

}

highscore(highScores)

