let countDownTime = .50//in minute

let totalTimeInSec = countDownTime * 60

let timerElement = document.getElementById("timer")

function updateTimer() {
    let h = Math.floor(totalTimeInSec / 3600)
    let m = Math.floor((totalTimeInSec/60)%60)
    let s = totalTimeInSec -(h*3600 + m*60)

    let time = `${h} : ${m} : ${s}`
    timerElement.innerHTML = time
    if (totalTimeInSec > 0) {
        totalTimeInSec--
    } else {
        alert(" times up")
        clearInterval(timerInterval)
    }
}

let timerInterval =setInterval(updateTimer,1000)