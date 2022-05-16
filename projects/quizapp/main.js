let questions =[
    {
        "question":"What is Java ?",
        "opt1":"Programming language",
        "opt2":"Type of Cofee",
        "opt3":"a Game",
        "opt4":"all of them",
        "ans":"Programming language"
    },
    {
        "question":"What is full form of OOP ?",
        "opt1":"over of program",
        "opt2":"on off program",
        "opt3":"object oriented programming",
        "opt4":"all of them",
        "ans":"object oriented programming"
    },
    {
        "question":"What is Javascript is used for?",
        "opt1":"game dev",
        "opt2":"ai dev",
        "opt3":"for nothing",
        "opt4":"web dev",
        "ans":"web dev"
    },
    {
        "question":"what ML stands for  ?",
        "opt1":"Machine Learning",
        "opt2":"meta learning",
        "opt3":"my learning",
        "opt4":"all of them",
        "ans":"Machine Learning"
    }

]


//elements
let q = document.getElementById("que")
let opt1 =document.getElementById("opt1")
let opt2 =document.getElementById("opt2")
let opt3 =document.getElementById("opt3")
let opt4 = document.getElementById("opt4")
let n = 0
score = 0

opt1.addEventListener("click", (e) => {
    console.log(questions[n][e.target.id])

    if (checkans(questions[n][e.target.id])) {
        score++
    }
    n++
    Quiz()
    console.log(score)

    
})
opt2.addEventListener("click", (e) => {
    console.log(questions[n][e.target.id])

    if (checkans(questions[n][e.target.id])) {
        score++
    } 
    n++
    Quiz()
    console.log(score)
})
opt3.addEventListener("click", (e) => {
    console.log(questions[n][e.target.id])

    if (checkans(questions[n][e.target.id])) {
        score++
    }
    n++
    Quiz()
    console.log(score)
})
opt4.addEventListener("click", (e) => {
    console.log(questions[n][e.target.id])

    if (checkans(questions[n][e.target.id])) {
        score++
    }
    n++
    Quiz()
    console.log(score)
})





function Quiz() {
   
    q.innerHTML = questions[n].question
    opt1.innerHTML=questions[n].opt1
    opt2.innerHTML=questions[n].opt2
    opt3.innerHTML=questions[n].opt3
    opt4.innerHTML=questions[n].opt4

}


function checkans(opt) {
    if (opt == questions[n].ans) return true
    return false
}


Quiz()