let usuario = {
    nome: 'Kayo', 
    excluir: function() {
        console.log('O usuário, ' + this.nome + ' foi excluido !')
    }
}

usuario.excluir()