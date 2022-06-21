const Factorial = (number)=>{
    if(number == 1){
        return 1
    }
    return number*Factorial(number-1);

}

let number =  4;
const factorial = Factorial(number);
console.log(`Factorial of ${number} is ${factorial}`);