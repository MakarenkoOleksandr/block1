var getAge = function (birth_year, now, name) {
  const isNum =
    typeof birth_year === "number" &&
    typeof now === "number" &&
    now > birth_year;

  const error =
    "birth_year, now must be a number and now bigger than birth_year";

  if (isNum) {
    const result = now - birth_year;
    const message = `Hello ${name} you are ${result} years old`;
    return message;
  }

  return error;
};

module.exports = { getAge };
