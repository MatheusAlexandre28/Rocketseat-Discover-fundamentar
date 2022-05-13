// throw

function sayMyname(name = '') {
    if (name === '') {
        throw 'Nome é necessario'
    }
    console.log(name)
}



// try...catch
try {
    sayMyname('Matheus')
} catch(e) {
    console.log(e)
}

console.log('após após o try catch')



