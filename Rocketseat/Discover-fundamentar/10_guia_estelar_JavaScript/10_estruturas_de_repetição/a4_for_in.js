// for...in

let person = {
    name: 'Matheus',
    age: 20,
    weight: 60,
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}