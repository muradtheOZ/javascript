const animalCount = (miles)=>{
    let animalCounter = 0;
    if( miles > 10){
        animalCounter = 10 * 10
        miles = miles -10;
        if(miles > 10){
            animalCounter += 10 * 50
            miles = miles -10;
            animalCounter += 100 *miles
        }
        else{
            animalCounter += miles * 50
        }
    }
    else{
        animalCounter = miles *10
    }
    return animalCounter
}

const myDistance = 24;
const totalAnimal = animalCount(myDistance);
console.log(totalAnimal)