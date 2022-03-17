const ftoc = function (fahrenheit) {
  //(32°F − 32) × 5/9
  let celsius = (fahrenheit - 32) * (5 / 9)
  if (celsius == 0) {
    return 0
  } else {
    return Number(celsius.toFixed(1))
  }
}

const ctof = function (celsius) {
  //(0°C × 9/5) + 32

  let fahrenheit = celsius * 1.8 + 32

  if (fahrenheit == 0) {
    return 0
  } else {
    return Number(fahrenheit.toFixed(1))
  }
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
}

// use number.toFixed(1)
// npm test tempConversion.spec.js
