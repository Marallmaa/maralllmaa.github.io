let time = document.querySelector(".time")
let startStopButton = document.querySelector("#ss")
let lapp = document.querySelector(".lapp")
let lapButton = document.querySelector(".lapButton")
let minutes = 0
let seconds = 0
let doli = 0
let displayMinutes 
let displaySeconds
let displayDoli
let isPaused = true
let intervalId 
let lapN = 1
const startStop = () =>{
    if(isPaused){
        startStopButton.innerHTML = "Stop"
        intervalId = setInterval(run, 10)
        lapButton.disabled = false
    }
    else{
        startStopButton.innerHTML = "Start"
        clearInterval(intervalId)
        lapButton.disabled = true
    }
    isPaused = !isPaused
    

}

const run = () => {
    doli++
    if(doli == 100){
        seconds++
        doli = 0
    }
    if(seconds == 100){
        minutes++
        seconds = 0
    }
    if( minutes < 10){
        displayMinutes = "0" + minutes
    }else {
        displayMinutes = minutes
    }
    if( seconds < 10){
        displaySeconds = "0" + seconds
    }else {
        displaySeconds = seconds
    }
    if( doli < 10){
        displayDoli = "0" + doli
    }else {
        displayDoli = doli
    }
    time.innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayDoli
}
const reset = () => {
    time.innerHTML = "00:00:00"
    minutes = 0
    seconds = 0
    doli = 0
    lapp.innerHTML = ""
    lapN = 1
    if(!isPaused){
        startStop()
    }
}
let number = document.querySelector(".number")
let timer = document.querySelector(".timer")
const lap = () => {
    let lapNumber = document.createElement("div")
    let lapTime = document.createElement("div")
    lapNumber.innerHTML = lapN
    lapTime.innerHTML = displayMinutes + ":" + displaySeconds + ":" + displayDoli
    lapp.append(lapNumber , lapTime)
    lapNumber.style = number
    lapTime.style = timer
    lapN++
}
