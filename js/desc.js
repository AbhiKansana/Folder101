

import navbar1 from './components.js'

document.getElementById("navbar").innerHTML = navbar1

let arr77 = JSON.parse(localStorage.getItem("itemNo1")) 



let som =`
        <img src="${arr77[0].imageUrl}">
        <div>
        <p class="name">${arr77[0].shirtNmae}</p>
        <p class="price">&#8377;${arr77[0].price}</p>
        <p class="member">${arr77[0].member}</p>
        <button onclick="toCart(${JSON.stringify(arr77[0]).split('"').join("&quot;")})">Add to Cart</button>
        </div>

`
document.getElementById("main").innerHTML = som

let arrCart11 = JSON.parse(localStorage.getItem("Cart11")) || []
function toCart(ele){
    arrCart11.push(ele)
  localStorage.setItem("Cart11",JSON.stringify(arrCart11))
}