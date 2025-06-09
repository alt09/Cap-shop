document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navMenu = document.querySelector('header.banner ul');

    toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        toggleButton.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
    });
});