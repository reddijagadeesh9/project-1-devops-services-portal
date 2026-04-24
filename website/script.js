const searchBar = document.querySelector('.search-bar');
const cards = document.querySelectorAll('.card');

searchBar.addEventListener('keyup', () => {
    const searchValue = searchBar.value.toLowerCase();

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
