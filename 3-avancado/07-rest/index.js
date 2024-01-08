// function (a, b, ...args) {
//     ...
// }




function incentivarQuester (mensagem, ...nomesQuester){
    nomesQuester.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester('Parabéns por ter chego ao módulo de Javascript avançado,','kayo', 'alana', 'marcelo')