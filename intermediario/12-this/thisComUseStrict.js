// 'use strict'

// console.log(window)
// console.log(window === this)

// this.name = 'Kayo'
// function saudar() {
//     console.log('this no contexdo da funcao', this)
//     console.log('Olá, ' + this.name)
// }

// saudar ()

// 'use strict'

// let usuario = {
//     nome: 'Kayo',
//     saudar: function () {
//         console.log('this no contexto do metodo', this)
//         console.log('this.nome no contexto do metodo', this.nome)
//     }
// }

// usuario.saudar()


// let comida = {
//     nome: 'Brócolis',
//     temperatura: 0
// }

// comida.cozinhar = function (temperaturaDeCozimento) {
//     this.temperatura = temperaturaDeCozimento;
// }

// console.log(comida)

// comida.cozinhar(100)

// console.log(comida)


let comida = {
    nome: 'Brócolis',
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento) {
        console.log('this no contexto do objeto comida', this)
        this.temperatura = temperaturaDeCozimento;
    }
}


console.log(comida)

comida.cozinhar(100)

console.log(comida)