function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post');

    console.log(posts)

    let primeiroPost = posts[0];
    console.log('primeiroPost', primeiroPost)
    primeiroPost.style.backgroundColor = 'red';

}

function aumentarFonteSegundoPost () {
    let textoPosts = document.getElementsByClassName('texto-post');

    console.log(textoPosts[1].classList)

    textoPosts[1].classList.add('fonte-grande')

    console.log(textoPosts[1].classList)
}

function marcarRadio