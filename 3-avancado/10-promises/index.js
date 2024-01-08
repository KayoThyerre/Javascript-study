// new Promise((resolve, reject) => {

// })



let ferverAgua = function(chaleiraEstaNoFogao, fogaoEstaLigado){
    return new Promise ((resolve, reject)=> {
      if (chaleiraEstaNoFogao && fogaoEstaLigado){
        console.log('começando o processo de ferver a agua')
        resolve()
      } else {
        console.log('é necessario ligar o fogão e colocar a chaleira no fogão')
        reject()
      }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = false

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)

console.log('fazendo o café')