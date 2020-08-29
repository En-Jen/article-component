const shareBtnInactive = document.querySelector('.card__share-icon');
const shareBtnActive = document.querySelector('.card__share-icon--active');
const shareActive = document.querySelector('.card__share');

shareBtnInactive.addEventListener('click', () => {
    shareActive.classList.toggle('card__share--visible');
});

shareBtnActive.addEventListener('click', () => {
    shareActive.classList.toggle('card__share--visible');
});