let x = 0
document.getElementById("carousel-button-prev").addEventListener("click",slidingImg)
document.getElementById("carousel-button-next").addEventListener("click",slidingImg)
  
function slidingImg(){
    x++
    if(x%2!==0){
   document.getElementById("sixth-1").style.display = "none"
   document.getElementById("sixth-2").style.display = "block"
   document.getElementById("sixth-2").style.animation = " fadeVisibility .5s"


    }
    else{
       document.getElementById("sixth-1").style.display = "block"
       document.getElementById("sixth-1").style.animation = " fadeVisibility .5s"
       document.getElementById("sixth-2").style.display = "none"
    }
}

 
function toMenPage(){
    window.location.href = "html/men.html"
     
}

function raju(){
    let d = babu
    console.log(d,"shyam")
}

function lulu(){
console.log("raj")
}

import navbar1 from './components.js'

document.getElementById("navbar").innerHTML = navbar1
      
