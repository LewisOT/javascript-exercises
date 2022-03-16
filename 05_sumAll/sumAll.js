const sumAll = function (beginSum, endSum) {
  if (beginSum == null || endSum == null || beginSum < 0 || endSum < 0) {
    return "ERROR"
  }

  let adder = 0
  if (endSum > beginSum) {
    for (let i = endSum; i <= beginSum; i++) {
      adder += i
    }
}
else {
    for (let i = beginSum; i <= endSum; i++) {
        adder += i
    }
    return adder
}

// Do not edit below this line
module.exports = sumAll

//npm test sumAll.spec.js
