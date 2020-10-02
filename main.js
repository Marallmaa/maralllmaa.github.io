function stop(){
    clear()
    document.querySelector(".stopLight").style.backgroundColor = "red"
    
}
function slow(){
    clear()
    document.querySelector(".slowLight").style.backgroundColor = "yellow"
    
}
function go(){
    clear()
    document.querySelector(".goLight").style.backgroundColor = "green"
    
}
const clear = () => {
    document.querySelector(".stopLight").style.backgroundColor = "black";
    document.querySelector(".slowLight").style.backgroundColor = "black";
    document.querySelector(".goLight").style.backgroundColor = "black";
}