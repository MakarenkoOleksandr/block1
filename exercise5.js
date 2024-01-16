var compare = function (a, b) {
  const isNum = typeof a === "number" && typeof b === "number" && a > b;

  if (isNum) {
    return true;
  }

  return false;
};

module.exports = {
  compare,
};
