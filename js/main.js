const buttonElem = document.querySelector('button');
const answerElem = document.querySelector('.answer');

buttonElem.addEventListener('click', () => {
    if(answerElem.style.display !== 'block') {
        answerElem.style.display = 'block';
    } else {
        answerElem.style.display = 'none';
    }
});