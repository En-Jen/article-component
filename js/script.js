const shareBtn = document.querySelector('.card__share-icon');
const shareActive = document.querySelector('.card__share');

shareBtn.addEventListener('click', () => {
    shareActive.classList.toggle('card__share--visible');
});