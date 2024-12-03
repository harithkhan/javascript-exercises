const reverseString = function(string) {
    let toArray = string.split("");
    let reverseArray = [];
    for (let i = toArray.length - 1; i >= 0; i--) {
        reverseArray.push(toArray[i]);
    }
    return reverseArray.join("");
};

reverseString("hello there");
// Do not edit below this line
module.exports = reverseString;
