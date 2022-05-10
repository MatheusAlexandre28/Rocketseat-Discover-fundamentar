// switch

// let expression = 'c'

// switch (expression) {
//     case 'a':
//         // codigo aqui
//         console.log('a')
//         break
//     case 'b':
//         // outro codigo aqui, para expression b 
//         console.log('b')
//         break
//     default:
//         console.log('default')
//         break
// }

// calculadora.....

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('nao implementado')
            break
    }

    return result
}

console.log(calculate(4, '%', 8))