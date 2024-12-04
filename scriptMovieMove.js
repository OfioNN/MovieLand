const moviesContainers = document.querySelectorAll('.movieTable');
const nxtBtns = document.querySelectorAll('.nxt-btn');
const preBtns = document.querySelectorAll('.pre-btn');

moviesContainers.forEach((container, i) => {
    // Pobierz szerokość kontenera
    const containerWidth = container.getBoundingClientRect().width;

    // Obsługa przycisku "nxt-btn" (przesunięcie w prawo) - tylko jeśli przycisk istnieje
    if (nxtBtns[i]) {
        nxtBtns[i].addEventListener('click', () => {
            container.scrollLeft += containerWidth;
        });
    }

    // Obsługa przycisku "pre-btn" (przesunięcie w lewo) - tylko jeśli przycisk istnieje
    if (preBtns[i]) {
        preBtns[i].addEventListener('click', () => {
            container.scrollLeft -= containerWidth;
        });
    }
});
