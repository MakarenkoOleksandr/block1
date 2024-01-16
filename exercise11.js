var toCelsius = function (fahrenheit) {
  const isNum = typeof fahrenheit === "number";
  const error = "Celsium must be a number!";

  if (isNum) {
    const result = Math.round((fahrenheit - 32) / 1.8);
    return result;
  }

  return error;
};

var toFahr = function (celsius) {
  const isNum = typeof celsius === "number";
  const error = "Celsium must be a number!";

  if (isNum) {
    const result = Math.round(celsius * 1.8 + 32);
    return result;
  }

  return error;
};

module.exports = {
  toCelsius,
  toFahr,
};
