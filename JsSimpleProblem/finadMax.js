const findMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const maxnumber = findMax([1, 2, 3, 4,775, 6, 7, 8, 9, 10]);
console.log(maxnumber);
