const readline = require('readline');
let number;
const digit = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
digit.question("Enter a number: ",(answers)=>{
    number = answers;
    numberIsEvenOrOdd()
    digit.close();
})
const numberIsEvenOrOdd = () => {
if(number != undefined){
if (number % 2 == 0) {
    console.log(`Number ${number} is Even`);
}
 else {
    console.log(`Number ${number} is Odd`);
}
}
}

