/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema
numerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 79     - C
* entre 60 - 69   - D
* menor que 60    - F

*/

/*

   - meu codigo...
   
let notes = 100
let note_A = notes >= 90
let note_B = notes <= 89 && notes >= 80
let note_C = notes <= 79 && notes >= 70
let note_D = notes <= 69 && notes >= 60

if(note_A){
    console.log('A')
} else if(note_B){
    console.log("B")
} else if(note_C){
    console.log('C')
} else if(note_D){
    console.log('D')
} else{
    console.log('F')
}

*/


//  -  codigo professor...


function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0
    
    let scoreFinal;
    
    if(scoreA){
        scoreFinal = "A"
    } else if(scoreB){
        scoreFinal = "B"
    } else if(scoreC){
        scoreFinal = "C"
    } else if(scoreD){
        scoreFinal = "D"
    } else if(scoreF){
        scoreFinal = "F"
    } else {
        scoreFinal = 'Nota invalida'
    }
    
    return scoreFinal
}

// colocando na function podemos usar o codigo varias vezes
console.log(getScore(100))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))




