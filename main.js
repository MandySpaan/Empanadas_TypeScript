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
    console.log(toBePaid);
};
//Trying out the function
fn(2, 6, 4);
