const btnColorChanger = document.getElementById('color-changer');

const boxOne = document.getElementsByClassName('boxOne');

btnColorChanger.addEventListener('click', changeColor);

function changeColor() {
    boxOne.classlist.remove(".azul");
    boxOne.classlist.add(".vermelho");
}