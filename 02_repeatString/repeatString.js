const repeatString = function(str, num) {
    if (num < 0) {
        return "ERROR"
    } else {
    let returnedString = "";
    for (let i = 0; i < num; i++) {
        returnedString += str;
    }
    return returnedString;
    }
};
const number = Math.floor(Math.random() * 1000)
repeatString("", number);

// Do not edit below this line
module.exports = repeatString;
