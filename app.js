const shop = document.getElementById("shop");


const shopItemsData=

fetch("data.json")
     .then((resp) => resp.json() ) 
     .then((data) => {
        console.log(data)
     })

const basket = []

const generateShop = () =>  {

return (shop.innerHTML = shopItemsData.map((x)=>{
    let {id, name, price, desc, img} =x ;
return `
<div id=product-id-${id} class="item">
            <img width="218" src= ${img} alt="">
            <div class="info">
                <h3>${name}</h3>
                <p>${desc}</p> 
                <div class="price-quantity">
                    <h2>${price} $</h2>
                    <div class="buttons">
                        <i id="probandoBtn"  onclick ="increment(${id})" class="fa-solid fa-plus"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick ="decrement(${id})"  class="fa-solid fa-minus"></i>

                    </div>
                </div>
            </div>
        </div>
 `
}).join("")
); };

//  generateShop();

//  const increment = (id) =>{
//     let selectedItem = id;
//    let search = basket.find((x) => x.id === selectedItem.id);
//    if (search === undefined){ 
//     basket.push({
//         id: selectedItem.id,
//         item: 1
//     })}
//     else{
//         search.item += 1;
//     }
//     // console.log(basket)
//     update(selectedItem.id);
//  };
//  const decrement = (id) =>{let selectedItem = id;
//     let search = basket.find((x) => x.id === selectedItem.id);
//     if (search.item === 0) return; 
//      else{
//          search.item -= 1;
//      }
//     //  console.log(basket)
//      update(selectedItem.id);
//  };
//  const update = (id) =>{
//      let search = basket.find((x)=> x.id === id);
//     console.log(search.item)
//     document.getElementById(id).innerHTML = search.item
//  };

// const probandoBtn = document.getElementById("probandoBtn")

// probandoBtn.addEventListener("click",() => {
//     Toastify({
//   text: "Elemento agregado al carrito",
//   duration: 3000,
//   position:"left",
//   backgroundColor: "#056745"
 
// }).showToast();
// })