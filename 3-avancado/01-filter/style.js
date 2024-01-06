let pessoas = [
    { nome: 'Kayo', idade: 27 },
    { nome: 'Alana', idade: 32 },
    { nome: 'Mario', idade: 27 }
]

// let pessoasComIdadeDe27Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 27){
//         pessoasComIdadeDe27Anos.push(pessoas[i])
//     }
// }

let pessoasComIdadeDe27Anos = pessoas.filter(function(pessoa){
    return pessoa.idade === 27
});
