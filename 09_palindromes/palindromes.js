function palindromes(string) {
    let dataStorage = string.toLowerCase();
    let storage = ""
    let storageTwo = "";
    for (let i = 0; i < dataStorage.length; i++) {
        console.log(dataStorage[i])
        if (dataStorage.match(/[A-Za-z]/) && dataStorage[i] !== " " && dataStorage[i] !== "," && dataStorage[i] !== ";" && dataStorage[i] !== "!" && dataStorage[i] !== ".") {
            console.log('passed logic')
            storage += dataStorage[i]
            storageTwo += dataStorage[i]
            console.log("this is the storage " + storage)
            console.log(storage)
        }
    }


    storage = [...storage].reverse().join("")

    if (storage === storageTwo){
        return true

    }
    console.log(storage)
    return false
};
console.log(palindromes('Racecar!'))
// Do not edit below this line
module.exports = palindromes;

