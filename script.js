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


// Pobranie pojedynczego elementu przez ID (ID jest unikalne w dokumencie)
const selectOscarsYear = document.querySelector('#OscarsYear');
const movieTable = document.querySelector('.movieTable');
const movieTableOscars2023 = document.querySelector('.movieTableOscars2023');
const movieTableOscars2024 = document.querySelector('.movieTableOscars2024');
const movieTableOscars2022 = document.querySelector('.movieTableOscars2022');
const movieTableOscars2021 = document.querySelector('.movieTableOscars2021');
const movieTableOscars2020 = document.querySelector('.movieTableOscars2020');

var selectedOscarYear = 2024;
// Event listener dla zmiany selektora
selectOscarsYear.addEventListener("change", (event) => {
    const selectedYear = event.target.value; // Poprawka: użycie event.target
    //console.log(selectedYear); // Wyświetla wybrany rok w konsoli
    selectedOscarYear = selectedYear;
    console.log(selectedOscarYear);

    if(selectedOscarYear == 2024){
        // selectOscarsYear.innerHTML = "2024";
        movieTable.innerHTML = movieTableOscars2024.innerHTML;
    }
    else if(selectedOscarYear == 2023){
        // selectOscarsYear.innerHTML = "2023";
        movieTable.innerHTML = movieTableOscars2023.innerHTML;
    }
    else if(selectedOscarYear == 2022){
        movieTable.innerHTML = movieTableOscars2022.innerHTML;
    }
    else if(selectedOscarYear == 2021){
        movieTable.innerHTML = movieTableOscars2021.innerHTML;
    }
    else if(selectedOscarYear == 2020){
        movieTable.innerHTML = movieTableOscars2020.innerHTML;
    }
});

// Info Movies
const infoAboutMovie_Oppenheimer = document.querySelector('.infoAboutMovieOppenheimer');
const infoAboutMovie_PoorThings = document.querySelector('.infoAboutMoviePoorThings');
const infoAboutMovie_TZOF = document.querySelector('.infoAboutMovieTZOF');
const infoAboutMovie_Barbie = document.querySelector('.infoAboutMovieBarbie');
const infoAboutMovie_Holdovers = document.querySelector('.infoAboutMovieHoldovers');
const infoAboutMovie_AOAF = document.querySelector('.infoAboutMovieAOAF');
const infoAboutMovie_AF = document.querySelector('.infoAboutMovieAF');
const infoAboutMovie_Boy = document.querySelector('.infoAboutMovieBoy');
const infoAboutMovie_Days = document.querySelector('.infoAboutMovieDays');
const infoAboutMovie_MinusOne = document.querySelector('.infoAboutMovieMinusOne');


// Click on movie image
const movieImage_Oppenheimer = document.querySelector('#OppenheimerImage');
const movieImage_PoorThings = document.querySelector('#PoorThingsImage');
const movieImage_TZOF = document.querySelector('#TZOFImage');
const movieImage_Barbie = document.querySelector('#BarbieImage');
const movieImage_Holdovers = document.querySelector('#HoldoversImage');
const movieImage_AOAF = document.querySelector('#AOAFImage');
const movieImage_AF = document.querySelector('#AFImage');
const movieImage_Boy = document.querySelector('#BoyImage');
const movieImage_Days = document.querySelector('#DaysImage');
const movieImage_MinusOne = document.querySelector('#MinusOneImage');


// Modal, Animation, Close 
const close = document.querySelectorAll('.close');
var closeArray =[...close];

var modal = document.getElementById("myModal");
const popup = document.querySelector('.popupHide');

// Event Oppenheimer image
movieImage_Oppenheimer.addEventListener('click', () => {
    infoAboutMovie_Oppenheimer.style.display = 'block';
    infoAboutMovie_Oppenheimer.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_Oppenheimer.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});

// Event PoorThings image
movieImage_PoorThings.addEventListener('click', () => {
    infoAboutMovie_PoorThings.style.display = 'block';
    infoAboutMovie_PoorThings.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_PoorThings.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});

// Event TZOF image
movieImage_TZOF.addEventListener('click', () => {
    infoAboutMovie_TZOF.style.display = 'block';
    infoAboutMovie_TZOF.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_TZOF.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});

// Event Barbie image
movieImage_Barbie.addEventListener('click', () => {
    infoAboutMovie_Barbie.style.display = 'block';
    infoAboutMovie_Barbie.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_Barbie.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});

// Event Holdovers image
movieImage_Holdovers.addEventListener('click', () => {
    infoAboutMovie_Holdovers.style.display = 'block';
    infoAboutMovie_Holdovers.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_Holdovers.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});

// Event ANATOMY OF A FALL image
movieImage_AOAF.addEventListener('click', () => {
    infoAboutMovie_AOAF.style.display = 'block';
    infoAboutMovie_AOAF.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_AOAF.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});

// Event AMERICAN FICTION image
movieImage_AF.addEventListener('click', () => {
    infoAboutMovie_AF.style.display = 'block';
    infoAboutMovie_AF.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_AF.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});

// Event THE BOY AND THE HERON image
movieImage_Boy.addEventListener('click', () => {
    infoAboutMovie_Boy.style.display = 'block';
    infoAboutMovie_Boy.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_Boy.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});


// Event 20 Days in Mariupol image
movieImage_Days.addEventListener('click', () => {
    infoAboutMovie_Days.style.display = 'block';
    infoAboutMovie_Days.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_Days.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});

// Event Minus One image
movieImage_MinusOne.addEventListener('click', () => {
    infoAboutMovie_MinusOne.style.display = 'block';
    infoAboutMovie_MinusOne.classList.remove('popupHide'); // Usuń animację wyjścia
    infoAboutMovie_MinusOne.style.animation = 'popup 0.5s ease-in-out'; // Dodaj animację wejścia

    document.body.classList.add('no-scroll'); // Blokuje przewijanie tła
    modal.style.display = "flex";
    modal.classList.remove('modalOut'); // Usuń animację wyjścia
    modal.style.animation = 'opacityAnim 0.5s ease-in-out'; // Dodaj animację wejścia
});



// ---------------------- CLOSE ---------------------- //

closeArray.forEach((close) => {
    // Event Close (x)
    close.addEventListener('click', () => {
        // OPENERHEIMER
        infoAboutMovie_Oppenheimer.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_Oppenheimer.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        // POOR THINGS
        infoAboutMovie_PoorThings.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_PoorThings.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        //TZOF
        infoAboutMovie_TZOF.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_TZOF.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        // BARBIE
        infoAboutMovie_Barbie.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_Barbie.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        // HOLDIVERS
        infoAboutMovie_Holdovers.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_Holdovers.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        // ANATOMY OF A FALL
        infoAboutMovie_AOAF.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_AOAF.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        // AMERICAN FICTION
        infoAboutMovie_AF.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_AF.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        // THE BOY AND THE HERON
        infoAboutMovie_Boy.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_Boy.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        // 20 Days in Mariupol
        infoAboutMovie_Days.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_Days.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

        // MINUS ONE
        infoAboutMovie_MinusOne.classList.add('popupHide'); // Dodaj animację wyjścia
        infoAboutMovie_MinusOne.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjś

        // MODAL
        modal.style.animation = 'opacityAnimOut 0.35s ease-out'; // Ustaw animację wyjścia
        modal.classList.add('modalOut'); // Dodaj animację wyjścia

        setTimeout(() => {
            // OPENERHEIMER
            infoAboutMovie_Oppenheimer.style.display = 'none';

            // POOR THINGS
            infoAboutMovie_PoorThings.style.display = 'none';

            // TZOF
            infoAboutMovie_TZOF.style.display = 'none';

            // BARBIE
            infoAboutMovie_Barbie.style.display = 'none';

            // HOLDIVERS
            infoAboutMovie_Holdovers.style.display = 'none';

            // ANATOMY OF A FALL
            infoAboutMovie_AOAF.style.display = 'none';

            // AMERICAN FICTION
            infoAboutMovie_AF.style.display = 'none';

            // THE BOY AND THE HERON
            infoAboutMovie_Boy.style.display = 'none';

            // 20 Days in Mariupol
            infoAboutMovie_Days.style.display = 'none';

            // MINUS ONE
            infoAboutMovie_MinusOne.style.display = 'none';

            modal.style.display = "none";
            document.body.classList.remove('no-scroll'); // Przywraca przewijanie tła
        }, 300); // Czas musi odpowiadać czasowi animacji (0.5s)
    });
});


// Event Close (poza modalem)
window.onclick = function(event) {
  if (event.target == modal) {
    // OPENERHEIMER
    infoAboutMovie_Oppenheimer.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_Oppenheimer.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // POOR THINGS
    infoAboutMovie_PoorThings.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_PoorThings.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    //TZOF
    infoAboutMovie_TZOF.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_TZOF.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // BARBIE
    infoAboutMovie_Barbie.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_Barbie.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // HOLDIVERS
    infoAboutMovie_Holdovers.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_Holdovers.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // ANATOMY OF A FALL
    infoAboutMovie_AOAF.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_AOAF.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // AMERICAN FICTION
    infoAboutMovie_AF.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_AF.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // THE BOY AND THE HERON
    infoAboutMovie_Boy.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_Boy.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // 20 Days in Mariupol
    infoAboutMovie_Days.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_Days.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // MINUS ONE
    infoAboutMovie_MinusOne.classList.add('popupHide'); // Dodaj animację wyjścia
    infoAboutMovie_MinusOne.style.animation = 'popup-out 0.35s ease-out'; // Ustaw animację wyjścia

    // MODAL
    modal.classList.add('modalOut'); // Dodaj animację wyjścia
    modal.style.animation = 'opacityAnimOut 0.35s ease-out'; // Ustaw animację wyjścia

    setTimeout(() => {
        // OPENERHEIMER
        infoAboutMovie_Oppenheimer.style.display = 'none';
        
        // POOR THINGS
        infoAboutMovie_PoorThings.style.display = 'none';

        // TZOF
        infoAboutMovie_TZOF.style.display = 'none';

        // BARBIE
        infoAboutMovie_Barbie.style.display = 'none';

        // HOLDIVERS
        infoAboutMovie_Holdovers.style.display = 'none';

        // ANATOMY OF A FALL
        infoAboutMovie_AOAF.style.display = 'none';

        // AMERICAN FICTION
        infoAboutMovie_AF.style.display = 'none';

        // THE BOY AND THE HERON
        infoAboutMovie_Boy.style.display = 'none';

        // 20 Days in Mariupol
        infoAboutMovie_Days.style.display = 'none';

        // MINUS ONE
        infoAboutMovie_MinusOne.style.display = 'none';

        modal.style.display = "none";
        document.body.classList.remove('no-scroll'); // Przywraca przewijanie tła
    }, 300); // Czas musi odpowiadać czasowi animacji (0.5s)
  }
}