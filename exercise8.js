var checkAge = function (age, minAge) {
  const isNum =
    typeof age === "number" && typeof minAge === "number" && age > minAge;

  if (isNum) {
    return true;
  }

  return false;
};

module.exports = {
  checkAge,
};
