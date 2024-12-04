var mode = $("#mode"); // Zmienna do przechowywania obecnego trybu

var currentMode = "night"; // Początkowy tryb

$(mode).on('click', function () {
    if (currentMode === "day") {  // Porównaj currentMode, a nie mode
        nightMode();  // Zmienia tryb na noc
        currentMode = "night";  // Ustawia tryb na noc
    } else {
        dayMode();  // Zmienia tryb na dzień
        currentMode = "day";  // Ustawia tryb na dzień
    }
});

function dayMode() {
    $("body").css("background-color", "white");
}

function nightMode() {
    $("body").css("background-color", "black");
}
