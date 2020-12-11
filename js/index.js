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


const images = ["./img/projectsPhotos/img1.jpg" , "./img/projectsPhotos/img2.jpg" , "./img/projectsPhotos/img3.jpg", "./img/projectsPhotos/img4.jpg" , "./img/projectsPhotos/img5.jpg" , "./img/projectsPhotos/img6.jpg" ,  "./img/projectsPhotos/img7.jpg" , "./img/projectsPhotos/img8.jpg" , "./img/projectsPhotos/img9.jpg" , "./img/projectsPhotos/img10.jpg"]
let imagesProjects = document.querySelector(".imageProjects")
let i = 0

const syncPhotos = document.querySelectorAll("#syncPhotos")

syncPhotos.onmouseover = movePhotos
const movePhotos = () => {
    imagesProjects.src = images[i]
    i++
    if(i === images.length){
        i = 0
    }
}








