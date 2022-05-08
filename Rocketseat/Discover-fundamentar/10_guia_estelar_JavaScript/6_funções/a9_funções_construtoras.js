/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

// let name = new String("Mathues") // por isso é uma boa pratica colocar a primeira letra maiusculo na hora de fazer uma function contructor
// console.log(name)

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const matheus = new Person("Matheus")
const gigi = new Person("Gigi")
console.log(matheus.walk())
console.log(gigi.walk())
