const evenOdd = (number)=>{
   if (number % 2 == 0 ){
        return 'Even';
   }
   else{
    return 'Odd';
   }
}

let number = 11112435243247;
let checkNumber = evenOdd(number);
console.log(`${number} is ${checkNumber}`);