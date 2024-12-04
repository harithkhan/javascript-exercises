const convertToCelsius = function(faren) {
  return Math.round((faren - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(celc) {
  return Math.round((celc * (9/5) + 32) *10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
