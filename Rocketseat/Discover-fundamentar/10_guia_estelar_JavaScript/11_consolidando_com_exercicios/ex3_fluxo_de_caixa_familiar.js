/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo
array:
    * receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a familia esta com
saldo positivo ou negativo, seguido do valore do saldo

*/

/*
// meu codigo

function sum(object){
    let gastos = {
        revenue: [
            1200
        ],
        expenditure: [
            1500
        ]
    }

    let soma = gastos.revenue - gastos.expenditure
    return soma

}

if(sum() >= 0){
    console.log(`Seu saldo esta positivo = ${sum()}R$`)
} else (
    console.log(`Seu saldo esta negativo = ${sum()}R$`)
)

*/


// codigo professor

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450]
}

function sum(array){
    let total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()
