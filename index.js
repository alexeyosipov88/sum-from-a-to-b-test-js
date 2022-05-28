
function  sum(fromN, toN) {
  if(fromN == toN) {
    return toN;
  }
  return fromN + sum(fromN + 1, toN);
  // Sum all the values from fromN up to toN
}

module.exports = sum;
