let colors = ["#DEB887" , "#778899" , "#BC8F8F" , "#808000" , "#00008B"]
i = 0
let input = document.getElementById("input")
const changeBG = () => {
    document.body.style.backgroundColor = colors[i]
    i++
    if(i == colors.length){
        i = 0
    }
}
const addColor = () => {
    document.body.style.backgroundColor = input.value 
    if (document.body.style.backgroundColor == input.value){
        colors.push(input.value)
    }else {
        alert("Wrong colors value")
    }
    input.value = " "
}
