const removeFromArray = function (array, ...nums1) {
  let container = []
  let counter = 0
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (nums1[i] !== array[j]) {
        container.push(array[j])
      }
    }
  }
  return container
}
// Do not edit below this line
module.exports = removeFromArray

//npm test removeFromArray.spec.js
