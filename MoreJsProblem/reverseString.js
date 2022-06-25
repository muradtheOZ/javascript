const ReverseString = (str) =>{
    let reverseStr = '';
    for(let i = (str.length)-1; i >= 0; i--){
        reverseStr += str[i]
    }
    return reverseStr
}

const hello = ReverseString("Hello!")

console.log("reverse result is: ", hello)

const actual = ReverseString(hello);

console.log("actual string was: ", actual)