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
