const removeFromArray = function (array, ...elements) {
    
    for (let element of elements) {
        let index = array.indexOf(element);
        while (index > -1) { // only splice array when item is found
            array.splice(index, 1); // 2nd parameter means remove one item only
            index = array.indexOf(element);
        }
    }
    return array;
}

console.log(removeFromArray([1, 2, 3, 4], 7, "tacos"));

// Do not edit below this line
module.exports = removeFromArray;
