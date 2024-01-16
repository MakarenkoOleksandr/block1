var howManyDays = function (dob, now) {
  const isNum = typeof dob === "number" && typeof now === "number";
  const error = "now and dob must be a numbers!";

  if (isNum) {
    const countDays = (now - dob) * 365;
    const result = `you have lived for ${countDays} days already!`;
    return result;
  }
  return error;
};

module.exports = {
  howManyDays,
};
