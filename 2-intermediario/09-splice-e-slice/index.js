// Array.slice([inicio[,fim]])

// let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']

// let frutasExtraidas = frutas.slice(1)

// console.log(frutasExtraidas)

// console.log(frutas)



// frutas.splice(indice, numero de elementos que quer remover)

// let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']

// let frutasExtraidas = frutas.splice(1, 2)

// console.log(frutasExtraidas)

// console.log(frutas)

let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']

let removeEAdicionaFrutas = frutas.splice(1, 2, 'Goiaba', 'Abacaxi', 'Pera')

console.log(removeEAdicionaFrutas)

console.log(frutas)