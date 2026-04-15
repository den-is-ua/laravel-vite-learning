import './bootstrap';

window.addEventListener('load', () => {
    const h1 = document.querySelector('h1');
    h1.textContent = import.meta.env.VITE_HOME_PAGE_NAME;
});