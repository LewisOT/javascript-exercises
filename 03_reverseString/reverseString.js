const reverseString = function (string) {
  let container = ""
  for (let i = 1; i < string.length + 1; i++) {
    container += string[string.length - i]
  }
  return container
}

// Do not edit below this line
module.exports = reverseString
