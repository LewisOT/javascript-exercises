const fibonacci = function(array) {
    if (array < 0) {
        return "OOPS"
    }
    array = parseInt(array)
    let storage = [0, 1, 1];
    let tempBin = 0;
    for (let i = 0; i <= array-3; i++){
        for (let j = 1; j < storage.length; j++) {

            tempBin += storage[j]
        }
        storage.shift();
        storage.push(tempBin)
        tempBin = 0;
    }
return storage[2]
};

// Do not edit below this line
module.exports = fibonacci;
