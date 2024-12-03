const sumAll = function(min, max) {
    if (min < 0 || max < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    let totalSum = 0;
    for (i = min; i <= max; i++) {
        totalSum += i;
    }
    return totalSum;
};

sumAll(123, 1)
/*
const sumAll = function(firstNum, secondNum) {

    if (firstNum < 0 || secondNum < 0) {
        return "ERROR"
    }
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    }
    let sortedArray = []
    if (firstNum > secondNum) {
        sortedArray.push(secondNum);
        sortedArray.push(firstNum);
        
    } else {
        sortedArray.push(firstNum);
        sortedArray.push(secondNum);
    }
    let arrayToSum = [];
    for (let i = sortedArray[0]; i <= sortedArray[1]; i++) {
        arrayToSum.push(i);
    }
    let sumOfArray = 0
    for (let i = 0; i <= arrayToSum.length - 1; i++) {
        sumOfArray += arrayToSum[i];
    }
    return sumOfArray;
};
*/
// Do not edit below this line
module.exports = sumAll;
