let images =  ["img1.jpg" ,"img2.jpg" , "img3.jpg" , "img4.jpg" , "img5.jpg"]
let img = document.querySelector("img")
let i = 0
let paused = false
const togglePause = () => {
    if(!paused){
        clearInterval(intervalId)
    }
    else{
        intervalId = setInterval(commandFunction , 1300)
    }
    paused = !paused
}
const commandFunction = () => {
    img.src =  images[i]
    i++
    if(i == images.length)
        i = 0
}
let intervalId = setInterval(commandFunction , 1300)