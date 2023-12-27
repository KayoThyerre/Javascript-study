const square = document.querySelector('.square');

square.addEventListener('click', () => {
    
    const blueClassExists = square.classList.contains('blue');
    
    if (blueClassExists) {
        square.classList.remove('blue');
    } else {
        square.classList.add('blue')
    }
})