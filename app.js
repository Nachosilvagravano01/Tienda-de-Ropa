const shop = document.getElementById("shop");


const shopItemsData=[{
    id: "pantalon1",
    name:"Pantalon-Jogging",
    price:980,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "/Imagenes/Pantalones/Pant1.jpg"},
    
    {id: "buzo1",
    name:"Buzo-Jogging",
    price:1200,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "/Imagenes/Buzos/buzo1.jpg"},

    {id: "camiseta1",
    name:"Camiseta",
    price:580,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "/Imagenes/Camisetas/camiseta1.jpg"},

    {id: "short1",
    name:"Short",
    price:460,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing.",
    img: "/Imagenes/Shorts/ahort3.jpg"}
]

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

 generateShop();

 const increment = (id) =>{
    let selectedItem = id;
   let search = basket.find((x) => x.id === selectedItem.id);
   if (search === undefined){ 
    basket.push({
        id: selectedItem.id,
        item: 1
    })}
    else{
        search.item += 1;
    }
    // console.log(basket)
    update(selectedItem.id);
 };
 const decrement = (id) =>{let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
    if (search.item === 0) return; 
     else{
         search.item -= 1;
     }
    //  console.log(basket)
     update(selectedItem.id);
 };
 const update = (id) =>{
     let search = basket.find((x)=> x.id === id);
    console.log(search.item)
    document.getElementById(id).innerHTML = search.item
 };

const probandoBtn = document.getElementById("probandoBtn")

probandoBtn.addEventListener("click",() => {
    Toastify({
  text: "Elemento agregado al carrito",
  duration: 3000,
  position:"left",
  backgroundColor: "#056745"
 
}).showToast();
})