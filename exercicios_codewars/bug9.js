"use strict";
exports.__esModule = true;
exports.squareSum = void 0;
function squareSum(numbers) {
    var squareNumbers = 0;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        squareNumbers += Math.pow(number, number);
    }
    return squareNumbers;
}
exports.squareSum = squareSum;
console.log(squareSum([0, 3, 4, 5]));
