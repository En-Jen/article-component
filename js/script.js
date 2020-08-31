const shareBtn = document.querySelector('.card__btn');
const shareActive = document.querySelector('.card__share');

shareBtn.addEventListener('click', () => {
    shareActive.classList.toggle('card__share--visible');
});