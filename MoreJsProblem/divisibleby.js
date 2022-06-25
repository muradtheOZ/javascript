const DivisibleBy =(number) =>{
    if (number % 3 == 0 && number % 5 == 0){
        return "foobar"
    }
    else if(number % 3 == 0){
        return "foo"
    }
    else if(number % 5 == 0){
        return "bar"
    }
    else{
        return number
    }
}

const number = 40;
const result = DivisibleBy(number);
console.log(result);