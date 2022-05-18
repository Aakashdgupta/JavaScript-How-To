class Quiz {
  constructor(questions,config=null) {
    this.questions = questions;
    this.score = 0;
    this.index = 0;
      
  }

  updateQuestions() {
    q.innerHTML = this.questions[this.index].question;
    opt1.innerHTML = this.questions[this.index].opt1;
    opt2.innerHTML = this.questions[this.index].opt2;
    opt3.innerHTML = this.questions[this.index].opt3;
    opt4.innerHTML = this.questions[this.index].opt4;
  }

  checkans(opt) {
      if (opt === this.questions[this.index].ans) {
        this.score++;        
      }
    this.index++;
      if (this.index < this.questions.length) {
        this.updateQuestions();
      } else {
        alert(this.score);
        }
    // console.log(" option : " + opt);
    // console.log(" score : " + this.score);
    // console.log(" index : " + this.index);
  }
}

let questions = [
  {
    question: "What is Java ?",
    opt1: "Programming language",
    opt2: "Type of Cofee",
    opt3: "a Game",
    opt4: "all of them",
    ans: "Programming language",
  },
  {
    question: "What is full form of OOP ?",
    opt1: "over of program",
    opt2: "on off program",
    opt3: "object oriented programming",
    opt4: "all of them",
    ans: "object oriented programming",
  },
  {
    question: "What is Javascript is used for?",
    opt1: "game dev",
    opt2: "ai dev",
    opt3: "for nothing",
    opt4: "web dev",
    ans: "web dev",
  },
  {
    question: "what ML stands for  ?",
    opt1: "Machine Learning",
    opt2: "meta learning",
    opt3: "my learning",
    opt4: "all of them",
    ans: "Machine Learning",
  },
];

//elements
let q = document.getElementById("que");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let opt4 = document.getElementById("opt4");
let n = 0;
score = 0;

quiz = new Quiz(questions);
quiz.updateQuestions();

opt1.addEventListener("click", (e) => {
  quiz.checkans(quiz.questions[quiz.index][e.target.id]);
});

opt2.addEventListener("click", (e) => {
  quiz.checkans(quiz.questions[quiz.index][e.target.id]);
});

opt3.addEventListener("click", (e) => {
  quiz.checkans(quiz.questions[quiz.index][e.target.id]);
});

opt4.addEventListener("click", (e) => {
  quiz.checkans(quiz.questions[quiz.index][e.target.id]);
});

