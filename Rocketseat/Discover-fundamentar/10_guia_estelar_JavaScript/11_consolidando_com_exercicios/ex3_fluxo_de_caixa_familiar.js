/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a familia esta com
saldo positivo ou negativo, seguido do valore do saldo

*/

let object = {
    revenue: [{       
        dividendos: 150,
        salario: 300,
        rendaExtra: 400,
    }],
    expenditure: [{
        light: 200,
        water: 200,
        interet: 150
    }]
}

object.revenue[0].breakfast 
// console.log()
// console.log(object.revenue[0].lunch)
// console.log(object.revenue[0].dinner)

function calc(object){
    let total = object.revenue[0].breakfast
    return total
}

