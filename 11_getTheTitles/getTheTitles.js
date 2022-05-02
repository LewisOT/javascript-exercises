const getTheTitles = function(objecto) {
    let storage = [];
    for (i = 0; i < objecto.length; i++) {
        storage.push(objecto[i].title)
    }
return storage
};

// Do not edit below this line
module.exports = getTheTitles;
