// if...else

let temperature = 38
let hightTemperature = temperature >= 37.5 
let mediumTemperature = temperature < 37.5 && temperature >= 37


if(hightTemperature) {
    console.log('febre alta')
} else if(mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log('saudavel')
}