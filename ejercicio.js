function devuelveNum(num){
    let arrayNums = [1, 1]

    if(num === 0) return [];
    if(num === 1) return [1];

    for (let i = 2; i < num; i++){
        let nextFibonacci = arrayNums[i-1] + arrayNums[i-2];
        arrayNums = [...arrayNums, nextFibonacci]
    }
    return arrayNums;
}

console.log(devuelveNum(0));
console.log(devuelveNum(1));
console.log(devuelveNum(2));
console.log(devuelveNum(3));
console.log(devuelveNum(4));
console.log(devuelveNum(5));
console.log(devuelveNum(6));
console.log(devuelveNum(7));