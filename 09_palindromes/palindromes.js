const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^\w]/g, "");
    const reverseString = cleanString.split("").reverse().join("");
    return (cleanString === reverseString);
};
console.log(palindromes('ZZZZ car, a man, a maracaz.'));
// Do not edit below this line
module.exports = palindromes;
