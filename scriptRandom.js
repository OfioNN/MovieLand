const movies = [
        { 
            title: "Inception", 
            categories: ["Action", "Adventure", "Sci-Fi", "Thriller"], 
            streamingPlatform: "HBO Max", 
            pg: "13", 
            duration: "2h 28min" 
        },
        { 
            title: "The Godfather", 
            categories: ["Crime", "Drama"], 
            streamingPlatform: "Prime Video", 
            pg: "R", 
            duration: "2h 55min" 
        },
        { 
            title: "The Dark Knight", 
            categories: ["Action", "Drama", "Crime", "Thriller"], 
            streamingPlatform: "HBO Max", 
            pg: "13", 
            duration: "2h 32min" 
        },
        { 
            title: "Pulp Fiction", 
            categories: ["Crime", "Comedy", "Drama"], 
            streamingPlatform: "Prime Video", 
            pg: "R", 
            duration: "2h 34min" 
        },
        { 
            title: "The Matrix", 
            categories: ["Sci-Fi", "Action"], 
            streamingPlatform: "HBO Max", 
            pg: "R", 
            duration: "2h 16min" 
        },
        { 
            title: "Fight Club", 
            categories: ["Drama", "Thriller"], 
            streamingPlatform: "Hulu", 
            pg: "R", 
            duration: "2h 19min" 
        },
        { 
            title: "Forrest Gump", 
            categories: ["Drama", "Romance"], 
            streamingPlatform: "Prime Video", 
            pg: "13", 
            duration: "2h 22min" 
        },
        { 
            title: "The Shawshank Redemption", 
            categories: ["Drama", "Crime"], 
            streamingPlatform: "Prime Video", 
            pg: "R", 
            duration: "2h 22min" 
        },
        { 
            title: "Interstellar", 
            categories: ["Sci-Fi", "Drama", "Adventure"], 
            streamingPlatform: "HBO Max", 
            pg: "13", 
            duration: "2h 49min" 
        },
        { 
            title: "The Avengers", 
            categories: ["Action", "Sci-Fi"], 
            streamingPlatform: "Disney+", 
            pg: "13", 
            duration: "2h 23min" 
        },
        { 
            title: "The Lion King", 
            categories: ["Animation", "Drama", "Adventure", "Family"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 28min" 
        },
        { 
            title: "Gladiator", 
            categories: ["Action", "Drama", "Adventure"], 
            streamingPlatform: "HBO Max", 
            pg: "R", 
            duration: "2h 35min" 
        },
        { 
            title: "Titanic", 
            categories: ["Romance", "Drama"], 
            streamingPlatform: "Paramount+", 
            pg: "13", 
            duration: "3h 14min" 
        },
        { 
            title: "Jurassic Park", 
            categories: ["Sci-Fi", "Adventure", "Action", "Thriller"], 
            streamingPlatform: "Prime Video", 
            pg: "13", 
            duration: "2h 7min" 
        },
        { 
            title: "The Silence of the Lambs", 
            categories: ["Thriller", "Crime", "Drama"], 
            streamingPlatform: "Prime Video", 
            pg: "R", 
            duration: "1h 58min" 
        },
        { 
            title: "The Social Network", 
            categories: ["Drama", "Biography"], 
            streamingPlatform: "Hbo Max", 
            pg: "13", 
            duration: "2h" 
        },
        { 
            title: "The Wolf of Wall Street", 
            categories: ["Comedy", "Drama", "Crime", "Biography"], 
            streamingPlatform: "Prime Video", 
            pg: "R", 
            duration: "3h" 
        },
        { 
            title: "The Grand Budapest Hotel", 
            categories: ["Comedy", "Crime", "Adventure"], 
            streamingPlatform: "Hulu", 
            pg: "R", 
            duration: "1h 39min" 
        },
        { 
            title: "Whiplash", 
            categories: ["Drama", "Music"], 
            streamingPlatform: "Prime Video", 
            pg: "R", 
            duration: "1h 46min" 
        },
        { 
            title: "Parasite", 
            categories: ["Drama", "Thriller", "Comedy"], 
            streamingPlatform: "Hulu", 
            pg: "R", 
            duration: "2h 12min" 
        },
        { 
            title: "Mad Max: Fury Road", 
            categories: ["Action", "Adventure", "Sci-Fi"], 
            streamingPlatform: "HBO Max", 
            pg: "R", 
            duration: "2h" 
        },
        { 
            title: "Coco", 
            categories: ["Animation", "Family", "Adventure", "Music", "Fantasy"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 45min" 
        },
        { 
            title: "Spider-Man: Into the Spider-Verse", 
            categories: ["Animation", "Action", "Adventure", "Comedy"], 
            streamingPlatform: "Netflix", 
            pg: "13", 
            duration: "1h 56min" 
        },
        { 
            title: "Avengers: Endgame", 
            categories: ["Action", "Sci-Fi", "Adventure", "Drama"], 
            streamingPlatform: "Disney+", 
            pg: "13", 
            duration: "3h 1min" 
        },
        { 
            title: "Shrek", 
            categories: ["Animation", "Comedy", "Adventure"], 
            streamingPlatform: "Netflix", 
            pg: "13", 
            duration: "1h 30min" 
        },
        { 
            title: "The Incredibles", 
            categories: ["Animation", "Action", "Adventure", "Family"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 55min" 
        },
        { 
            title: "Frozen", 
            categories: ["Animation", "Family", "Adventure", "Music", "Comedy"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 42min" 
        },
        { 
            title: "Zootopia", 
            categories: ["Animation", "Comedy", "Adventure", "Family", "Crime"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 48min" 
        },
        { 
            title: "Finding Nemo", 
            categories: ["Animation", "Adventure", "Comedy", "Family"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 40min" 
        },
        { 
            title: "Toy Story", 
            categories: ["Animation", "Comedy", "Adventure", "Family"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 21min" 
        },
        { 
            title: "The Revenant", 
            categories: ["Drama", "Adventure", "Thriller"], 
            streamingPlatform: "HBO Max", 
            pg: "R", 
            duration: "2h 36min" 
        },
        { 
            title: "1917", 
            categories: ["War", "Drama", "Action"], 
            streamingPlatform: "Hulu", 
            pg: "R", 
            duration: "1h 59min" 
        },
        { 
            title: "Saving Private Ryan", 
            categories: ["War", "Drama", "Action"], 
            streamingPlatform: "Paramount+", 
            pg: "R", 
            duration: "2h 49min" 
        },
        { 
            title: "Dune: Part Two", 
            categories: ["Action", "Sci-Fi", "Adventure" , "Drama"], 
            streamingPlatform: "HBO Max", 
            pg: "PG-13", 
            duration: "2h 46min" 
        },
        { 
            title: "Kingdom of the Planet of the Apes", 
            categories: ["Action", "Adventure", "Drama", "Sci-Fi", "Thriller"], 
            streamingPlatform: "Prime Video", 
            pg: "PG-13", 
            duration: "2h 25min" 
        },
        { 
            title: "Once Upon a Time in Hollywood", 
            categories: ["Comedy", "Drama", "Crime"], 
            streamingPlatform: "Hulu", 
            pg: "R", 
            duration: "2h 41min" 
        },
        { 
            title: "Knives Out", 
            categories: ["Comedy", "Drama", "Crime", "Thriller"], 
            streamingPlatform: "Prime Video", 
            pg: "13", 
            duration: "2h 10min" 
        },
        { 
            title: "Tenet", 
            categories: ["Sci-Fi", "Action", "Thriller"], 
            streamingPlatform: "HBO Max", 
            pg: "13", 
            duration: "2h 30min" 
        },
        { 
            title: "Black Panther", 
            categories: ["Action", "Adventure", "Sci-Fi"], 
            streamingPlatform: "Disney+", 
            pg: "13", 
            duration: "2h 14min" 
        },
        { 
            title: "Doctor Strange", 
            categories: ["Sci-Fi", "Action", "Adventure", "Fantasy"], 
            streamingPlatform: "Disney+", 
            pg: "13", 
            duration: "1h 55min" 
        },
        { 
            title: "Logan", 
            categories: ["Action", "Drama", "Sci-Fi", "Thriller"], 
            streamingPlatform: "Hulu", 
            pg: "R", 
            duration: "2h 17min" 
        },
        { 
            title: "Joker", 
            categories: ["Drama", "Thriller", "Crime"], 
            streamingPlatform: "HBO Max", 
            pg: "R", 
            duration: "2h 2min" 
        },
        { 
            title: "La La Land", 
            categories: ["Romance", "Music", "Drama"], 
            streamingPlatform: "Hulu", 
            pg: "PG-13", 
            duration: "2h 8min" 
        },
        { 
            title: "The Greatest Showman", 
            categories: ["Drama", "Music", "Biography"], 
            streamingPlatform: "Netflix", 
            pg: "PG", 
            duration: "1h 45min" 
        },        
        {
            title: "A Star is Born", 
            categories: ["Drama", "Romance", "Music"], 
            streamingPlatform: "HBO Max", 
            pg: "R", 
            duration: "2h 16min" 
        },
        {
            title: "Moana", 
            categories: ["Animation", "Adventure", "Comedy", "Family"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 47min" 
        },
        {
            title: "Soul", 
            categories: ["Animation", "Music", "Adventure", "Comedy", "Family"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 40min" 
        },
        {
            title: "The Secret Life of Walter Mitty", 
            categories: ["Adventure", "Comedy", "Drama"], 
            streamingPlatform: "Hulu", 
            pg: "PG", 
            duration: "1h 54min" 
        },
        {
            title: "The Truman Show", 
            categories: ["Drama", "Sci-Fi", "Comedy"], 
            streamingPlatform: "Prime Video", 
            pg: "PG", 
            duration: "1h 43min" 
        },
        {
            title: "Up", 
            categories: ["Animation", "Adventure", "Comedy", "Family"], 
            streamingPlatform: "Disney+", 
            pg: "G", 
            duration: "1h 36min" 
        }
        
];


var randomButton = $("#randomButton");

var actionCheck = $("#action");
var comedyCheck = $("#comedy");
var thrillerCheck = $("#thriller");
var horrorCheck = $("#horror");
var romanceCheck = $("#romance");
var fantasyCheck = $("#fantasy");
var warCheck = $("#war");
var scifiCheck = $("#scifi");
var crimeCheck = $("#crime");
var biographyCheck = $("#biography");
var adventureCheck = $("#adventure");
var familyCheck = $("#family");
var musicCheck = $("#music");
var dramaCheck = $("#drama");
var animationCheck = $("#animation");


var titleMovie = $("#titleMovie");
var categoryMovie = $("#categoryMovie");
var streamMovie = $("#streamMovie");
var pgMovie = $("#pgMovie");
var durationMovie = $("#durationMovie");

var showInfo = $("#showInfo");
var noResultsShow = $("#noResultsShow");
var noResultsTxt = $("#noResultsTxt");

$(randomButton).on('click', function () {
    randomMovie();
});

function randomMovie() {
    // Pobranie zaznaczonych kategorii
    let selectedCategories = [];
    if (actionCheck.is(":checked")) selectedCategories.push("Action");
    if (comedyCheck.is(":checked")) selectedCategories.push("Comedy");
    if (thrillerCheck.is(":checked")) selectedCategories.push("Thriller");
    if (horrorCheck.is(":checked")) selectedCategories.push("Horror");
    if (romanceCheck.is(":checked")) selectedCategories.push("Romance");
    if (fantasyCheck.is(":checked")) selectedCategories.push("Fantasy");
    if (warCheck.is(":checked")) selectedCategories.push("War");
    if (scifiCheck.is(":checked")) selectedCategories.push("Sci-Fi");
    if (biographyCheck.is(":checked")) selectedCategories.push("Biography");
    if (adventureCheck.is(":checked")) selectedCategories.push("Adventure");
    if (familyCheck.is(":checked")) selectedCategories.push("Family");
    if (musicCheck.is(":checked")) selectedCategories.push("Music");
    if (dramaCheck.is(":checked")) selectedCategories.push("Drama");
    if (animationCheck.is(":checked")) selectedCategories.push("Animation");
    if (crimeCheck.is(":checked")) selectedCategories.push("Crime");

    const filteredMovies = movies.filter(movie => {
        if(selectedCategories.length > 0) {
            const movieCategories = movie.categories;
            return selectedCategories.every(cat => movieCategories.includes(cat));
        }
    });


    if (filteredMovies.length > 0) {
        noResultsShow.hide();
        const randomMovie = filteredMovies[Math.floor(Math.random() * filteredMovies.length)];
        showInfo.show();
        titleMovie.html(randomMovie.title);
        categoryMovie.html(randomMovie.categories.join(", "));
        streamMovie.html(randomMovie.streamingPlatform);
        pgMovie.html(randomMovie.pg);
        durationMovie.html(randomMovie.duration);
    } else {
        noResultsTxt.html("No results found.");
        showInfo.hide();
        noResultsShow.show();
    }

    if (selectedCategories.length === 0) {
        noResultsTxt.html("Please select at least one category.");
        showInfo.hide();
        noResultsShow.show();
    }
}
