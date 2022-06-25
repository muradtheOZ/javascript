const IsNumberPositive = (arr) =>{
    const positiveArray = [];
    for(element of arr){
        if(element >= 0){
            positiveArray.push(element);
        }
        else{
            break;
        }
    }
    return positiveArray
}

const mixedArray = [1,2,3,10,22,-3,4,5,1000];

const positiveArray = IsNumberPositive(mixedArray);

console.log(positiveArray)