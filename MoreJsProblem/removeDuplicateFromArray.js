const removeDuplicate = (array)=>{
    let cleanArray = []
    for(let i = 0; i< array.length; i++) {
        if(cleanArray.indexOf(array[i]) == -1){
            cleanArray.push(array[i]);
        }
    }
    return cleanArray;

}

let duplicateArray = [1,2,3,4,434,44,4,4,44,5,6,7,8,9,10];
let cleanArray = removeDuplicate(duplicateArray);
console.log(cleanArray);