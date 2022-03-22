



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

  
  
function toCart(ele){
  let arrCart11 = JSON.parse(localStorage.getItem("Cart11")) || []
   
  
    arrCart11.push(ele)
    
  localStorage.setItem("Cart11",JSON.stringify(arrCart11))
  // let arr99 = JSON.parse(localStorage.getItem("cat")) || []
  // arr99.push(ele)
  // localStorage.setItem("cat",JSON.stringify(arr99))
}
