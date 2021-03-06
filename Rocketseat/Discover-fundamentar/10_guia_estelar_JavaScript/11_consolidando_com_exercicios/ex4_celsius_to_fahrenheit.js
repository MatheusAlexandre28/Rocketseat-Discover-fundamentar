/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celsius ou
    fahrenheit e faça a transformação de uma unidade para
    outra

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

*/


/*
// - meu codigo

function fahrenheittocelsius(F){
    total = (F - 32) * 5/9
    console.log(total)
}

function celsiustofahrenheit(C){
    total = C * 9/5 + 32
    console.log(total)
}

celsiustofahrenheit('25')
fahrenheittocelsius('77')
*/


// - codigo professor
// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExist && !fahrenheitExist){
        throw new Error('Grau nao identificado')
    }

    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo C -> F
    if(celsiusExist){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    //transformDegree('50Z')
} catch (error) {
    console.log(error.message)
}