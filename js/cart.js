let x3 = "ramesh"
localStorage.setItem("nulu",x3)


let arrCart = JSON.parse(localStorage.getItem("Cart11"))
let price= 0

function display(arr){
arr.map(function(ele){
    let som = `
    
    <div class="menbox">
    <img  src="${ele.imageUrl}">
    <p class="name">${ele.shirtNmae}</p>
    <p class="price">&#8377;${ele.price}</p>
    <p class="member">${ele.member}</p>
    <button onclick="removeCart(${JSON.stringify(ele).split('"').join("&quot;")})">Remove</button>
    </div>
    
    
    `
    price +=  +ele.price
    document.getElementById("main").innerHTML += som
})
  document.getElementById("price").innerHTML = "Total Price : " + price
}
display(arrCart)

console.log(price)


function removeCart(ele){
    let arr00 = JSON.parse(localStorage.getItem("Cart11"))
    console.log(arr00)
   let arr99 =  arr00.filter(function(i){
        return i.shirtNmae !== ele.shirtNmae
    })
    console.log(arr99)
    localStorage.setItem("Cart11",JSON.stringify(arr99))
    document.getElementById("main").innerHTML = ""
    price = 0
    display(arr99)
    
}
