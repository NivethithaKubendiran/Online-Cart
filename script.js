const product = [
    {
        id: 0,
        image:'https://www.cnet.com/a/img/resize/68d53e1cb5f0812938ff95155a0255cba92d7b77/hub/2021/08/09/7f9186af-6f23-4dd4-b6f4-766a1f7f6e02/apple-foldable-iphone-concept-art.png?auto=webp&fit=crop&height=1200&width=1200',
        title: 'iPhone Flip Flodable Mobile',
        price: 250,
    },
    {
        id: 1,
        image:'https://helios-i.mashable.com/imagery/reviews/02n4hYs63fnhgSULExtn1qY/hero-image.fill.size_1200x1200.v1663662692.jpg',
        title:'Air Podes Pro',
        price:180,
    },
    {
        id: 2,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq66sJNRKqwSv4sD3nhD5Yjj2kuUCo-qHvxR6DudshgQBPuzR7TgR5elx2625Q3wqjl30&usqp=CAU',
        title:'250D DSLR Camera',
        price:120,
    },
    {
        id: 3,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NaCnBE_eWGisWJtk4S92Vnx9X94704VVeA&usqp=CAU',
        title:'Head Phones',
        price:100,
    },
    {
        id:4,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kYzap7EQ1liEeUEJgbIGXrrPHDHA5_wkyt6KCU4MwDIXMFceMC5T7OE3tPPwzfLbVRs&usqp=CAU',
        title:'Smart Watch',
        price:250,
    },
    {
        id:5,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITq0U89NyI6GzhrUMNffi1XOeF8cZrgmTLg&usqp=CAU',
        title:'Pendrive',
        price:80,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j=0; total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}