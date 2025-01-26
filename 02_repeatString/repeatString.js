const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    let repeat = "";
    for (let i=num; i>0; i--) {
        repeat += string;
    }
    return repeat;
};

repeatString("hello", 10);

// Do not edit below this line
module.exports = repeatString;
