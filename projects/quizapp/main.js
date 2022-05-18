class Quiz {
  constructor(questions, config = null) {
    this.questions = questions;
    this.score = 0;
    this.index = 0;
    this.config = config;

    this.qEl;
    this.opt1El;
    this.opt2El;
    this.opt3El;
    this.opt4El;

    if (this.config !== null) {
      console.log("  not empty");
      let ctx = this;

      if (ctx.config) {
          ctx.qEl = document.getElementById(ctx.config.que);
          console.log(ctx.config)

          ctx.opt1El = document.getElementById(ctx.config.opt1);
          console.log(ctx.opt1El)

        ctx.opt1El.addEventListener("click", (e) => {
          ctx.checkans(ctx.questions[ctx.index][e.target.id]);
        });
          
          
        ctx.opt2El = document.getElementById(this.config.opt2);
        console.log(ctx.opt2El);
        ctx.opt2El.addEventListener("click", (e) => {
          ctx.checkans(ctx.questions[ctx.index][e.target.id]);
        });
          
          
          
        ctx.opt3El = document.getElementById(ctx.config.opt3);

        ctx.opt3El.addEventListener("click", (e) => {
          ctx.checkans(ctx.questions[ctx.index][e.target.id]);
        });
      }

      ctx.opt4El = document.getElementById(ctx.config.opt4);

      ctx.opt4El.addEventListener("click", (e) => {
        ctx.checkans(ctx.questions[ctx.index][e.target.id]);
      });

    } else {
      console.log("empty");
    }
  }

  updateQuestions() {
    this.qEl.innerHTML = this.questions[this.index].question;
    this.opt1El.innerHTML = this.questions[this.index].opt1;
    this.opt2El.innerHTML = this.questions[this.index].opt2;
    this.opt3El.innerHTML = this.questions[this.index].opt3;
    this.opt4El.innerHTML = this.questions[this.index].opt4;

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


let n = 0;
score = 0;

quiz = new Quiz(questions, {
  que: "que",
  opt1: "opt1",
  opt2: "opt2",
  opt3: "opt3",
  opt4: "opt4",
});
quiz.updateQuestions();
