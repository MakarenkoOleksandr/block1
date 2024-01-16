function multy(a, b) {
  const isNum = typeof a === "number" && typeof b === "number";
  const error = "Arguments is not a number";

  if (isNum) {
    const result = a * b;
    return result;
  }
  return error;
}
module.exports = {
  multy,
};
