const label = document.getElementById("label")
const shoppingCart = document.getElementById("shopping-cart")

const basket = JSON.parse(localStorage.getItem("data")) || []
const calculation = ()=>{
    let cartIcon = document.getElementById("cartAmaunt")
    cartIcon.innerHTML = (basket.map((x)=>x.item).reduce((x,y)=> x+y,0))
 };

 calculation()

 const generateCartItems = ()=>{
    if(basket.length !==0){
      return shoppingCart.innerHTML = basket.map((x)=>{
        let {id,item} = x;
        let search = shopItemsData.find((y)=>y.id === id) || [];
        return `
        <div class="cart-item">
          <img width="100" src="${search.img}" alt=""/>
          <div class="detalles">
            <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">${search.price} $</p>
              </h4></div>
               <h3>$ ${item * search.price}</h3>
          </div>
        </div>
        
        `
      }).join("")
    }
    else{
        shoppingCart.innerHTML = ``
        label.innerHTML= `
        <h2> El carrito esta vacio </h2>
        <a href="index.html">
        <button class = "HomeBtn"> Home </button>   
        `
    }
 }
generateCartItems()

const alerta = ()=>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Compra Exitosa',
    showConfirmButton: false,
    timer: 1500
  })
  localStorage.removeItem("data")
}

  

const totalAmount = ()=>{
  if(basket.length !==0){
     let amount =basket.map((x) =>{
      let{item, id}=x;
      let search = shopItemsData.find((y)=>y.id === id) || [];
      return item * search.price ;
     } ).reduce((x,y)=> x+y,0)
      label.innerHTML=`
      <h2>Precio Total : $ ${amount}</h2>
      <button onclick="alerta()" class="checkout">Checkout</button>
      `
  }
  else return
    
}

totalAmount()
