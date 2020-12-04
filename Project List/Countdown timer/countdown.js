let input = document.querySelector("input")
let view = document.querySelector(".view")
let time = 0  


var seconds 
var reseconds
var minute
var toCount= false

function setTime() {
    seconds = Number(input.value)
    counting()
}  
function count(){
    if(seconds > 0){
        if(toCount = true){
            seconds--
            remseconds = seconds % 60
            minute = Math.floor(seconds / 60)
            if(minute < 10){
                minute = "0" + minute
            }
            if(remseconds < 10){
                remseconds = "0" + remseconds
            }
            view.innerHTML = minute + ":" + remseconds   
        }
    }
    else{
        view.innerHTML = "Done !"
    }
}

function counting(){
    remseconds = seconds % 60
    minute = Math.floor(seconds / 60)
    if(minute < 10){
        minute = "0" + minute
    }
    if(remseconds < 10){
        remseconds = "0" + remseconds
    }
    view.innerHTML = minute + ":" + remseconds
    setInterval(count,1000)
}