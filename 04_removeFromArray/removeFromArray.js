const removeFromArray = function (array, ...nums1) {
  let container = array
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (nums1[i] === array[j]) {
        array.splice(j, 1)
      }
    }
  }
  return array
}
// Do not edit below this line
module.exports = removeFromArray

//npm test removeFromArray.spec.js
//Come back to this and commit the splice method to memory
