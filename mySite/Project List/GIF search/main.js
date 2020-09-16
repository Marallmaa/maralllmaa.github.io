let input = document.querySelector("input")
            
async function getAPI(){
    let imgElements = document.querySelectorAll("img")
    imgElements.forEach(function(img){
        img.remove()
    })
    q = input.value
    let response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=oPcj0HVV8FOHgyRnR08X2n8PrBFUZUG6&q=pizza" + q + " &limit=25&offset=0&rating=g&lang")
    let data = await response.json()
    console.log
    
    let button = document.querySelector("button").onclick = getAPI
    let i = 0
    while(i = 25)
    document.body.innerHTML = "<img.src=''" + data.data[3].images.original_mp4
    const images = document.createElement("img")
    images.src = element.images.fixed_heigth
    document.body.append(images)
}