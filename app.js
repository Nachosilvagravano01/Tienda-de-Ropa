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
                        <i class="fa-solid fa-plus"></i>
                        <div class="quantity">0</div>
                        <i class="fa-solid fa-minus"></i>

                    </div>
                </div>
            </div>
        </div>
 `
}).join("")
); };

 generateShop();
