//  Avançando no entendimento

function c() {
    setTimeout(() => {
        console.log('c')  // o setTimeout cria um assincronismo
    }, 1000);
    // console.log('c')
    return
}

function b() {
    console.log('b')
    return c()
}

function a() {
    b()
    console.log('a')
    return
}

a()