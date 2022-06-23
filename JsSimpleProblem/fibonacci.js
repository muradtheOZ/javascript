const fibonacciNum = (num)=>{
    if(num == 1){
        return 1
    }
    if(num == 0){
        return 0
    }
    
    return (fibonacciNum(num-1)) + fibonacciNum(num-2)
}

const fibonacciSeries = (num)=>{
    if(num == 1){
        return [0,1]
    }
    if(num == 0){
        return [0]
    }
    const fibo = fibonacciSeries(num-1)
    fibo[num] = fibo[num-1] + fibo[num-2]
    return fibo
}

let fib = 6;
let result = 0;
let seriesResult = 0;
if(fib == 1){
    result = 0
    seriesResult = [0];

}
else{
    result=fibonacciNum(fib)
    seriesResult = fibonacciSeries(fib)
}
console.log(result)
console.log(seriesResult)
