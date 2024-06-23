"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fn = void 0;
var fn = function (a, b, c) {
    var arrayEmpanadas = [];
    for (var i = 0; i < a; i++) {
        arrayEmpanadas.push(12);
    }
    for (var i = 0; i < b; i++) {
        arrayEmpanadas.push(14);
    }
    for (var i = 0; i < c; i++) {
        arrayEmpanadas.push(16);
    }
    console.log("Arguments turned into an array with original prices: ".concat(arrayEmpanadas));
    var combinedEmpanadas = [];
    while (arrayEmpanadas.length >= 2) {
        var firstElement = arrayEmpanadas.shift();
        var lastElement = arrayEmpanadas.pop();
        var newPrice = (firstElement + lastElement) / 2;
        combinedEmpanadas.push(newPrice, newPrice);
    }
    if (arrayEmpanadas.length == 1) {
        combinedEmpanadas.push(arrayEmpanadas[0]);
    }
    console.log("Combined empanadas array with new prices: ".concat(combinedEmpanadas));
    combinedEmpanadas.sort(function (a, b) { return b - a; });
    console.log("Combined empanadas array sorted from high to low: ".concat(combinedEmpanadas));
    var toBePaid = [];
    for (var i = 0; i < combinedEmpanadas.length; i += 3) {
        toBePaid.push(combinedEmpanadas[i]);
    }
    console.log("The empanadas that have to be paid ".concat(toBePaid));
    var finalPrice = 0;
    for (var _i = 0, toBePaid_1 = toBePaid; _i < toBePaid_1.length; _i++) {
        var empanada = toBePaid_1[_i];
        finalPrice += empanada;
    }
    console.log("The total amount to be paid is \u20AC".concat(finalPrice));
    return finalPrice;
};
exports.fn = fn;
//Trying out the function
(0, exports.fn)(1, 1, 1);
