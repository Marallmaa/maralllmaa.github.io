let input = document.querySelector("input")
let timer = document.querySelector(".timer")
const hasah = () => {
    if(input.value == ""){
        timer.innerHTML --
    }else{
        timer.innerHTML = Number(timer.innerHTML) - Number(input.value)
    }input.value = ""
}
const increase = () => {
    if(input.value == ""){
        timer.innerHTML ++
    }else{
        timer.innerHTML = Number(timer.innerHTML) + Number(input.value)
    }input.value = ""
}
const reset = () => {
    timer.innerHTML = 0
}
var nemeh = document.querySelector(".nemeh")
nemeh.onclick = increase
let resetButton = document.querySelector(".resetButton").addEventListener("click" , reset)
