var ageCalc = function (date_of_birth, future_year) {
  const isNum =
    typeof date_of_birth === "number" &&
    typeof future_year === "number" &&
    future_year > date_of_birth;

  const error =
    "date_of_birth and future_year must be a number and future_year bigger than date_of_birth";

  if (isNum) {
    const result = future_year - date_of_birth;
    return result;
  }

  return error;
};

module.exports = {
  ageCalc,
};
