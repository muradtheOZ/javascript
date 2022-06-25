const requiredWood = (chairQuantity,tableQuantity,bedQuantity) =>{

    const perChair = 3;
    const perTable = 9;
    const perBed = 20;

    const totalWood = chairQuantity * perChair + tableQuantity * perTable + bedQuantity * perBed
    return totalWood;
}

const myRequirement = requiredWood(1,1,1);
console.log(myRequirement);