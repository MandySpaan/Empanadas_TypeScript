export const fn = (a: number, b: number, c: number) => {

     if (a < 0 || b < 0 || c < 0) {
        throw new Error("The inputs cannot have a negative value");
     }

    if ((a + b + c) %3 !== 0) {
        throw new Error("The total sum of the inputs has to be a multiple of 3");
    }

    if (a + b + c >= 40) {
        throw new Error("The total sum of the inputs cannot be more than 40");
    }

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

        let newPrice: number = (firstElement + lastElement) / 2;
        combinedEmpanadas.push(newPrice, newPrice);
    }

    if (arrayEmpanadas.length == 1) {
        combinedEmpanadas.push(arrayEmpanadas[0])
    }

    console.log(`Combined empanadas array with new prices: ${combinedEmpanadas}`);

    combinedEmpanadas.sort((a, b) => b - a)
    console.log(`Combined empanadas array sorted from high to low: ${combinedEmpanadas}`);

    let toBePaid: number[] = [];

    for (let i = 0; i < combinedEmpanadas.length; i += 3){
        toBePaid.push(combinedEmpanadas[i])
    }
    console.log(`The empanadas that have to be paid ${toBePaid}`);

    var finalPrice: number = 0

    for (let empanada of toBePaid) {
        finalPrice += empanada
    }
    console.log(`The total amount to be paid is €${finalPrice}`);

return finalPrice
 };