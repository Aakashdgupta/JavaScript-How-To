
class countDownTimer{
    constructor(time,doSomething) {
        this.countDownTime = time
        this.totalTimeInSec = time * 60
        this.timerInterval = null
        this.doSomething =doSomething

        console.log(this.countDownTime)
        console.log(this.totalTimeInSec)
        console.log(this.timerInterval)
    }
    updateTimer() {
   

    let h = Math.floor(this.totalTimeInSec / 3600)
    let m = Math.floor((this.totalTimeInSec/60)%60)
    let s = this.totalTimeInSec - (h * 3600 + m * 60)
    console.log(h)
    console.log(m)
    console.log(s)
    console.log(this.totalTimeInSec)
        

    let time = `${h} : ${m} : ${s}`
    document.getElementById("timer").innerHTML = time
    if (this.totalTimeInSec > 0) {
        this.totalTimeInSec--
    } else { 
        clearInterval(this.timerInterval)
        if (this.doSomething) this.doSomething()
        return
 
    }
        
    }


    update() {
        this.timerInterval = setInterval(this.updateTimer.bind(this), 1000)

    }

    reset() {
        this.totalTimeInSec =this.countDownTime *60
    }
}


// Runner Code


