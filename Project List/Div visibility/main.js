let counter = 0
document.querySelector("button").onclick = myFunction
function myFunction(){
    counter++
    let div1 = document.querySelector("#div1")
    let div2 = document.querySelector("#div2")
    let div3 = document.querySelector("#div3")

    if(counter == 1){
        div2.style.visibility = "visible"
        div3.style.visibility = "visible"
        div1.style.visibility = "hidden"
    }
    else if(counter == 2){
        div1.style.visibility = "visible"
        div2.style.visibility = "hidden"
    }
    else if(counter == 3){
        div3.style.visibility = "hidden"
        div2.style.visibility = "visible"
    }
    else if(counter == 4){
        div3.style.visibility = "visible"
    }
    else if(counter == 5){
        div1.style.visibility = "hidden"
        div2.style.visibility = "hidden"
        div3.style.visibility = "hidden"
        counter = 0
    }
}
