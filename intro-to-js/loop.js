let num = 10;
while(num > 1){
    if(num % 2 == 0){
        console.log("Even")
    }
    else{
        console.log("Odd number")
    }
    num = num / 2;
    console.log(num);
}
num = 30
for(num; num > 1; num--){
    console.log (Math.ceil(num + Math.random(10)*100));
}