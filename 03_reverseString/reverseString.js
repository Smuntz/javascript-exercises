const reverseString = function (sentence) {
    let backward = sentence.split("");;
    backward = backward.reverse();
    join = backward.join("");
    
    return join;

};
console.log(reverseString("hello"));


// Do not edit below this line
module.exports = reverseString;
