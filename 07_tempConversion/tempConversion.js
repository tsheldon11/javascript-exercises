const ftoc = function(tempF) {
  let newC = (tempF-32) * 5/9;
  return Math.round(newC * 10)/10;
};

const ctof = function(tempC) {
  let newF = tempC * 9/5 + 32;
  return Math.round(newF *10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
