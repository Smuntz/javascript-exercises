const sumAll = function (startNum, endNum) {

    if (startNum <= 0 || endNum <= 0 || !Number.isInteger(startNum) 
        || !Number.isInteger(endNum) || Number.isNaN(endNum) || Number.isNaN(startNum)) {
        return "ERROR";
    }

    if (startNum > endNum) {
        start = endNum;
        end = startNum;
    } else {
        start = startNum;
        end = endNum;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
};

console.log(sumAll(1, "h"));
// Do not edit below this line
module.exports = sumAll;
