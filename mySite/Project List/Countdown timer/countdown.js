let input = document.querySelector("input")
let view = document.querySelector(".view")
let time = 0  

const setTime = () => {
    input.value = view.innerHTML
    const start = () => {
        view.innerHTML = time
        time--
    }
}
let intervalId = setTimeout(start , 1000, time)
    if (time = -1){
        clearInterval(intervalId)
    }
 