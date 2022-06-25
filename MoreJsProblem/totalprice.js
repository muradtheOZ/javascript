const totalPricerInCart = (products) =>{
    let price = 0
    for (const product of products){
        price += product.price * product.quantity
    }
    return price
}

let myCart = [
    {name:'Panjabi', size:'M', price:'500', quantity:2},
    {name:'Three-piece', size:'M', price:'500', quantity:3},
    {name:'Sharee', size:'M', price:'500', quantity:3},
    {name:'Pant', size:'M', price:'500', quantity:2},
    {name:'Shirt', size:'M', price:'1532', quantity:1}

]

const price = totalPricerInCart(myCart);
console.log(price)