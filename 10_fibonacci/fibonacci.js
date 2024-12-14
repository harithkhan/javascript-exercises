const fibonacci = function(num) {
    function generateFib(length) {
        const fib = [1, 1];
        for (let i = 2; i < length; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    };
    const cleanNum = parseInt(num);
    const array = generateFib(cleanNum);
    if (cleanNum < 0) {
        return "OOPS";
    } else if (cleanNum === 0) {
        return 0;
    } else return array[cleanNum - 1];
};
console.log(fibonacci("30"))

// Do not edit below this line
module.exports = fibonacci;
