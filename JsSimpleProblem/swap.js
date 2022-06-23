const Swaper = (n1,n2) =>{
    [n2,n1] = [n1,n2];
    return [n1,n2];
}

let myswaper = Swaper(19,29);
console.log(myswaper);
let first = 5
let second = 10

let temp = first; 
first = second;
second = temp;

console.log(first, second);

