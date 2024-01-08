
const pessoas = ['kayo', 'alana', 'gabriela']
console.log(...pessoas)

// let pessoas1 = ['kayo', 'alana', 'gabriela']
// let pessoas2 = ['marcelo', 'luis', 'elvira']

// pessoas1 = [ ...pessoas1, ...pessoas2 ]

// console.log(pessoas1)

const pessoa1 = { nome: 'kayo', idade: 27 }

const objetoClonado = { ...pessoa1 }
console.log(objetoClonado)
console.log(pessoa1)