let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('começando o processo de ferver a agua')
            resolve()
        } else {
            console.log('é necessario colocar a chaleira com a agua e ligar o fogão se não teu cafézinho não vai ficar pronto nunca')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

let passarCafe = () => console.log('passando café')

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado).then(passarCafe)
console.log('fazendo o café')