const hamburgerBtn = document.getElementById('hamburger-btn');
const rightNav = document.querySelector('.right');

hamburgerBtn.addEventListener('click', () => {
    rightNav.classList.toggle('hidden');
});