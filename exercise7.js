var isEven = function (arg) {
  const isNum = typeof arg === "number";
  const isOdd = arg % 2 === 0;
  if (isNum && isOdd) {
    return true;
  }

  return false;
};

module.exports = {
  isEven,
};
