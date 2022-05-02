const button1 = document.getElementById("button1")
const div = document.getElementById("contenedor-div")
const contenedor = document.getElementById("contenedor")
function AgregarBotones(){

    if(div.style.visibility == "visible"){
        div.style.visibility = ("hidden");
    }
    else{
        div.style.visibility = ("visible");
    }
}
button1.addEventListener("click", AgregarBotones)
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")

btn1.onclick = () =>{
    contenedor.style.backgroundColor = ("#251E40")
    localStorage.setItem("color","color1")
}
btn2.onclick = () =>{
    contenedor.style.backgroundColor = ("#5CA651")
    localStorage.setItem("color","color2")
}
btn3.onclick = () =>{
    contenedor.style.backgroundColor = ("#EDF252")
    localStorage.setItem("color","color3")
}
btn4.onclick = () =>{
    contenedor.style.backgroundColor = ("#F2B263")
    localStorage.setItem("color","color4")
}
btn5.onclick = () =>{
    contenedor.style.backgroundColor = ("#F26A4B")
    localStorage.setItem("color","color5")
    
}
Colorstorage();
function Colorstorage(){
    let color = localStorage.getItem("color")
    switch(color){
        case("color1"):contenedor.style.backgroundColor = ("#251E40")
        break;
        case("color2"):contenedor.style.backgroundColor = ("#5CA651")
        break;
        case("color3"):contenedor.style.backgroundColor = ("#EDF252")
        break;
        case("color4"):contenedor.style.backgroundColor = ("#F2B263")
        break;
        case("color5"):contenedor.style.backgroundColor = ("#F26A4B")
        break;
    }
}
