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
        },
        {
            title: "Blade Runner 2049",
            categories: ["Sci-Fi", "Drama", "Thriller"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "2h 44min"
        },
        {
            title: "The Irishman",
            categories: ["Crime", "Drama", "Biography"],
            streamingPlatform: "Netflix",
            pg: "R",
            duration: "3h 29min"
        },
        {
            title: "The Lego Movie",
            categories: ["Animation", "Comedy", "Adventure", "Family"],
            streamingPlatform: "HBO Max",
            pg: "PG",
            duration: "1h 40min"
        },
        {
            title: "Arrival",
            categories: ["Sci-Fi", "Drama", "Mystery"],
            streamingPlatform: "Hulu",
            pg: "PG-13",
            duration: "1h 56min"
        },
        {
            title: "Edge of Tomorrow",
            categories: ["Action", "Sci-Fi", "Adventure"],
            streamingPlatform: "HBO Max",
            pg: "PG-13",
            duration: "1h 53min"
        },
        {
            title: "The Pianist",
            categories: ["Drama", "Biography", "War"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 30min"
        },
        {
            title: "Inglourious Basterds",
            categories: ["Action", "Drama", "War"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 33min"
        },
        {
            title: "Shutter Island",
            categories: ["Thriller", "Drama"],
            streamingPlatform: "Hulu",
            pg: "R",
            duration: "2h 18min"
        },
        {
            title: "Inside Out",
            categories: ["Animation", "Family", "Comedy", "Drama"],
            streamingPlatform: "Disney+",
            pg: "PG",
            duration: "1h 35min"
        },
        {
            title: "Se7en",
            categories: ["Crime", "Drama", "Thriller"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 7min"
        },
        {
            title: "The Prestige",
            categories: ["Drama", "Sci-Fi", "Thriller"],
            streamingPlatform: "HBO Max",
            pg: "PG-13",
            duration: "2h 10min"
        },
        {
            title: "The Green Mile",
            categories: ["Drama", "Crime", "Fantasy"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "3h 9min"
        },
        {
            title: "Good Will Hunting",
            categories: ["Drama", "Romance"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "2h 6min"
        },
        {
            title: "The Departed",
            categories: ["Crime", "Drama", "Thriller"],
            streamingPlatform: "Netflix",
            pg: "R",
            duration: "2h 31min"
        },
        {
            title: "In Bruges",
            categories: ["Comedy", "Drama", "Crime"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "1h 47min"
        },
        {
            title: "No Country for Old Men",
            categories: ["Crime", "Drama", "Thriller"],
            streamingPlatform: "Hulu",
            pg: "R",
            duration: "2h 2min"
        },
        {
            title: "The Big Lebowski",
            categories: ["Comedy", "Crime"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "1h 57min"
        },
        {
            title: "12 Angry Men",
            categories: ["Drama"],
            streamingPlatform: "HBO Max",
            pg: "G",
            duration: "1h 36min"
        },
        {
            title: "Prisoners",
            categories: ["Crime", "Drama", "Thriller"],
            streamingPlatform: "Hulu",
            pg: "R",
            duration: "2h 33min"
        },
        {
            title: "Dunkirk",
            categories: ["War", "Drama", "Action"],
            streamingPlatform: "HBO Max",
            pg: "PG-13",
            duration: "1h 46min"
        },
        {
            title: "Hacksaw Ridge",
            categories: ["War", "Drama", "Biography"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 19min"
        },
        {
            title: "Fury",
            categories: ["War", "Action", "Drama"],
            streamingPlatform: "Netflix",
            pg: "R",
            duration: "2h 14min"
        },
        {
            title: "Platoon",
            categories: ["War", "Drama"],
            streamingPlatform: "Hulu",
            pg: "R",
            duration: "2h"
        },
        {
            title: "Apocalypse Now",
            categories: ["War", "Drama"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 27min"
        },
        {
            title: "The Thin Red Line",
            categories: ["War", "Drama"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "2h 50min"
        },
        {
            title: "1917",
            categories: ["War", "Drama", "Action"],
            streamingPlatform: "Hulu",
            pg: "R",
            duration: "1h 59min"
        },
        {
            title: "Black Hawk Down",
            categories: ["War", "Action", "Drama"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 24min"
        },
        {
            title: "Letters from Iwo Jima",
            categories: ["War", "Drama"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "2h 21min"
        },
        {
            title: "Enemy at the Gates",
            categories: ["War", "Drama", "Thriller"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "2h 11min"
        },
        {
            title: "The Bridge on the River Kwai",
            categories: ["War", "Drama", "Adventure"],
            streamingPlatform: "Prime Video",
            pg: "PG",
            duration: "2h 41min"
        },
        {
            title: "All Quiet on the Western Front",
            categories: ["War", "Drama"],
            streamingPlatform: "Netflix",
            pg: "R",
            duration: "2h 28min"
        },
        {
            title: "Bohemian Rhapsody",
            categories: ["Biography", "Drama", "Music"],
            streamingPlatform: "Hulu",
            pg: "PG-13",
            duration: "2h 14min"
        },
        {
            title: "The Imitation Game",
            categories: ["Biography", "Drama", "War"],
            streamingPlatform: "Prime Video",
            pg: "PG-13",
            duration: "1h 54min"
        },
        {
            title: "Schindler's List",
            categories: ["Biography", "Drama", "War"],
            streamingPlatform: "Netflix",
            pg: "R",
            duration: "3h 15min"
        },
        {
            title: "Steve Jobs",
            categories: ["Biography", "Drama"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "2h 2min"
        },
        {
            title: "The Theory of Everything",
            categories: ["Biography", "Drama", "Romance"],
            streamingPlatform: "Prime Video",
            pg: "PG-13",
            duration: "2h 3min"
        },
        {
            title: "Lincoln",
            categories: ["Biography", "Drama"],
            streamingPlatform: "HBO Max",
            pg: "PG-13",
            duration: "2h 30min"
        },
        {
            title: "Rocketman",
            categories: ["Biography", "Drama", "Music"],
            streamingPlatform: "Paramount+",
            pg: "R",
            duration: "2h 1min"
        },
        {
            title: "Hidden Figures",
            categories: ["Biography", "Drama"],
            streamingPlatform: "Disney+",
            pg: "PG",
            duration: "2h 7min"
        },
        {
            title: "Catch Me If You Can",
            categories: ["Biography", "Crime", "Drama"],
            streamingPlatform: "Prime Video",
            pg: "PG-13",
            duration: "2h 21min"
        },
        {
            title: "A Beautiful Mind",
            categories: ["Biography", "Drama", "Romance"],
            streamingPlatform: "HBO Max",
            pg: "PG-13",
            duration: "2h 15min"
        },
        {
            title: "The Social Network",
            categories: ["Biography", "Drama"],
            streamingPlatform: "HBO Max",
            pg: "PG-13",
            duration: "2h"
        },
        {
            title: "The Pursuit of Happyness",
            categories: ["Biography", "Drama"],
            streamingPlatform: "Netflix",
            pg: "PG-13",
            duration: "1h 57min"
        },
        {
            title: "Selma",
            categories: ["Biography", "Drama"],
            streamingPlatform: "Hulu",
            pg: "PG-13",
            duration: "2h 8min"
        },
        {
            title: "Raging Bull",
            categories: ["Biography", "Drama"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 9min"
        },
        {
            title: "The Aviator",
            categories: ["Biography", "Drama"],
            streamingPlatform: "HBO Max",
            pg: "PG-13",
            duration: "2h 50min"
        },
        {
            title: "The Conjuring",
            categories: ["Horror", "Thriller"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "1h 52min"
        },
        {
            title: "Hereditary",
            categories: ["Horror", "Drama"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 7min"
        },
        {
            title: "Get Out",
            categories: ["Horror", "Thriller"],
            streamingPlatform: "Netflix",
            pg: "R",
            duration: "1h 44min"
        },
        {
            title: "A Quiet Place",
            categories: ["Horror", "Thriller", "Drama"],
            streamingPlatform: "Prime Video",
            pg: "PG-13",
            duration: "1h 30min"
        },
        {
            title: "It",
            categories: ["Horror", "Thriller"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "2h 15min"
        },
        {
            title: "The Shining",
            categories: ["Horror", "Drama"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "2h 26min"
        },
        {
            title: "The Exorcist",
            categories: ["Horror", "Thriller"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "2h 2min"
        },
        {
            title: "Midsommar",
            categories: ["Horror", "Drama"],
            streamingPlatform: "Hulu",
            pg: "R",
            duration: "2h 28min"
        },
        {
            title: "Insidious",
            categories: ["Horror", "Thriller"],
            streamingPlatform: "Netflix",
            pg: "PG-13",
            duration: "1h 43min"
        },
        {
            title: "The Babadook",
            categories: ["Horror", "Drama"],
            streamingPlatform: "Prime Video",
            pg: "NR",
            duration: "1h 34min"
        },
        {
            title: "The Witch",
            categories: ["Horror", "Drama"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "1h 32min"
        },
        {
            title: "Scream",
            categories: ["Horror", "Thriller"],
            streamingPlatform: "Paramount+",
            pg: "R",
            duration: "1h 51min"
        },
        {
            title: "The Ring",
            categories: ["Horror"],
            streamingPlatform: "Hulu",
            pg: "PG-13",
            duration: "1h 55min"
        },
        {
            title: "Us",
            categories: ["Horror", "Thriller"],
            streamingPlatform: "HBO Max",
            pg: "R",
            duration: "1h 56min"
        },
        {
            title: "Sinister",
            categories: ["Horror", "Thriller"],
            streamingPlatform: "Prime Video",
            pg: "R",
            duration: "1h 50min"
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
