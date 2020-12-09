let opacityy = document.getElementsByClassName("opacityy")[0]
let topClass = document.querySelector(".topClass")
let ulClass = document.querySelector(".ulClass")

let logIn = false

const getStarted = () => {
    if(logIn){
        ulClass.disabled = false
        topClass.disabled = false
        
    }
    else{
        let text 
        let name = prompt("Please enter your name: ")
        text = "Hello " +name
        document.querySelector(".body-text").innerHTML = text 

        document.querySelector("#clickMe").style.animation = "none"

        logIn = true
        ulClass.disabled = true
        topClass.disabled = true
    }
}

document.querySelector("#pro").addEventListener("click" , function(){
    document.querySelector(".third").scrollIntoView({behavior: "smooth"})
})
document.querySelector("#intro").addEventListener("click" , function(){
    document.querySelector(".fourth").scrollIntoView({behavior: "smooth"})
}) 








