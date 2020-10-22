

const getStarted = () => {
    let text 
    let name = prompt("Please enter your name: ")
    text = "Hello " +name
    document.querySelector(".body-text").innerHTML = text
    
    
    
}

document.querySelector("#pro").addEventListener("click" , function(){
    document.querySelector(".third").scrollIntoView({behavior: "smooth"})
})
document.querySelector("#intro").addEventListener("click" , function(){
    document.querySelector(".fourth").scrollIntoView({behavior: "smooth"})
})










