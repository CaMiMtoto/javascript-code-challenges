function Movie(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
}

Movie.prototype.getOverview = function () {
    return `${this.title} is a ${this.rating} rated ${this.genre} movie directed by ${this.director} released in ${this.releaseYear}`;
}

const SpiderMan = new Movie("Spiderman", "Sam Raimi", "Action", "2020", "7.9");
const Avengers = new Movie("Avengers", "Joss Whedon", "Action", "2019", "8.9");
const StarWars = new Movie("Star Wars", "George Lucas", "Sci-Fi", "2013", "9.0");

console.log(SpiderMan.getOverview());
console.log(Avengers.getOverview());
console.log(StarWars.getOverview());