var howManyTeas = function (age, end_age, teas_day) {
  const isNum =
    typeof age === "number" &&
    typeof end_age === "number" &&
    typeof teas_day === "number" &&
    end_age > age;

  const error =
    "Age, end_age, teas_day must be a number and end_age must be bigger than age";

  if (isNum) {
    const result = (end_age - age) * 365 * teas_day;
    return result;
  }

  return error;
};

module.exports = {
  howManyTeas,
};
