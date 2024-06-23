var fn = function (a, b, c) {
    //To turn the arguments into an array of empanadas
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
};
//Trying out the function
fn(6, 2, 1);
