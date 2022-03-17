const sumAll = function (beginSum, endSum) {
  if (
    beginSum < 0 ||
    endSum < 0 ||
    typeof beginSum !== "number" ||
    typeof endSum !== "number"
  ) {
    return "ERROR"
  }
  let adder = 0
  if (beginSum > endSum) {
    for (let i = endSum; i <= beginSum; i++) {
      adder += i
    }
  } else {
    for (let i = beginSum; i <= endSum; i++) {
      adder += i
    }
  }
  return adder
}

// Do not edit below this line
module.exports = sumAll

//npm test sumAll.spec.js
