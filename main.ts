const fn = (a: number, b: number, c: number) => {

    //To turn the arguments into an array of empanadas
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

 };

 //Trying out the function
 fn(6, 2, 1)