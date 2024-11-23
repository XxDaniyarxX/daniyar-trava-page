const btnDark = document.querySelector('.btn-dark');
const card = document.querySelector('.card');

btnDark.addEventListener('click', () => {
    if (card.style.display === 'none') {
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
        console.log(btnDark)
    }
})