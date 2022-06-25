
const cheapest_phone = (phones)=>{
    let lowest_price = 999999999999999;
    let lowest_price_phone ='';

    // for(let i = 0; i < phone.length; i++){
    //     // console.log(phone[i].name)
    //     if(phone[i].price < lowest_price){
    //         lowest_price = phone[i].price
    //         lowest_price_phone = phone[i].name
    //     }
    // }
    for(const phone of phones){
        if(phone.price < lowest_price){
            lowest_price = phone.price
            lowest_price_phone = phone.name
        }
    }
    return lowest_price_phone
}

const phone = [
    {name:"Samsung",price: 234359099,storage:32},
    {name:"Oppo",price: 234334,storage:32},
    {name:"OnePlus",price: 2323435,storage:32},
    {name:"samsungNote11",price: 32323435,storage:32},
    {name:"Vivo",price: 23435,storage:32},
    {name:"Xaiomi",price: 12,storage:32}
]

const cheapPhone = cheapest_phone(phone)

console.log(cheapPhone)