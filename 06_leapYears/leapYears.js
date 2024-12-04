const leapYears = function(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true
    } else {
        return false
    }
};

leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
// Do not edit below this line
module.exports = leapYears;
