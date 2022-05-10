/*
    Type conversion (typecasting) vs Type coersion
*/

// console.log('9' + 5)



/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops )

    false
    0       // o type coersion transforma esses valores em false
    -0
    ""
    null
    undefined
    NaN
*/

// console.log( "" ? 'verdadeiro' : 'falso')

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatorio ( condicionais e lops )

    true     
    {}         / o type coersion que é o proprio JS ajusta para ser true esses valores
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log( Infinity ? 'verdadeiro' : 'falso')
