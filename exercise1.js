function total(num, num2) {
  const isNum = typeof num === "number" && typeof num2 === "number";
  const error = "Arguments is not a number";

  if (isNum) {
    const result = num + num2;
    return result;
  }
  return error;
}

// please never modify module.exports for the solutions since it is used for the testing
module.exports = {
  total,
};
