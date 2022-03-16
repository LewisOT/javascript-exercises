const repeatString = function (string, num) {
  container = ""
  if (num < 0) {
    return "ERROR"
  }
  for (let i = 0; i < num; i++) {
    container += string
  }
  return container
}

// Do not edit below this line
module.exports = repeatString
