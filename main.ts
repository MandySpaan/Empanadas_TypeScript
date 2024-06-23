const fn = (a: number, b: number, c: number) => {

    var arrayEmpanadas: number[] = []

    for (let i: number = 0; i < a; i++){
            arrayEmpanadas.push(12)
        }

    for (let i: number = 0; i < b; i++){
            arrayEmpanadas.push(14)
        }

    for (let i: number = 0; i < c; i++){
            arrayEmpanadas.push(16)
    }

    console.log(`Arguments turned into an array with original prices: ${arrayEmpanadas}`)

    var combinedEmpanadas: number[] = [];

    while (arrayEmpanadas.length >= 2) {
        let firstElement = arrayEmpanadas.shift() as number;
        let lastElement = arrayEmpanadas.pop() as number;

        var newPrice: number = (firstElement + lastElement) / 2;
        combinedEmpanadas.push(newPrice, newPrice);
    }

    if (arrayEmpanadas.length == 1) {
        combinedEmpanadas.push(arrayEmpanadas[0])
    }

    console.log(`Combined empanadas array with new prices: ${combinedEmpanadas}`);

    combinedEmpanadas.sort((a, b) => b - a)
    console.log(`Combined empanadas array sorted from high to low: ${combinedEmpanadas}`);
 };

 //Trying out the function
 fn(2, 6, 1)