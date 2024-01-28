class Movie {
    constructor(title, genre, availableCopies) {
        this.title = title;
        this.genre = genre;
        this.availableCopies = availableCopies;
    }

    rentMovie() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            console.log(`Movie "${this.title}" rented successfully.`);
        } else {
            console.log(`Sorry, "${this.title}" is not available for rent.`);
        }
    }

    returnMovie() {
        this.availableCopies++;
        console.log(`Movie "${this.title}" returned successfully.`);
    }
}

class Customer {
    constructor(name) {
        this.name = name;
        this.rentedMovies = [];
    }

    rentMovie(movie) {
        movie.rentMovie();
        this.rentedMovies.push(movie);
    }

    returnMovie(movie) {
        movie.returnMovie();
        this.rentedMovies = this.rentedMovies.filter(m => m !== movie);
    }
}

class MovieStore {
    constructor() {
        this.movies = [];
        this.customers = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    addCustomer(customer) {
        this.customers.push(customer);
    }

    displayMovieList() {
        console.log("Movie List:");
        this.movies.forEach(movie => {
            console.log(`Title: ${movie.title}, Genre: ${movie.genre}, Available Copies: ${movie.availableCopies}`);
        });
    }

    displayRentedMovies() {
        console.log("Rented Movies:");
        this.customers.forEach(customer => {
            console.log(`Customer: ${customer.name}`);
            customer.rentedMovies.forEach(movie => {
                console.log(`  - ${movie.title}`);
            });
        });
    }
}

// Example Usage:
const movieStore = new MovieStore();

const movie1 = new Movie("Inception", "Sci-Fi", 3);
const movie2 = new Movie("The Shawshank Redemption", "Drama", 2);


movieStore.addMovie(movie1);
movieStore.addMovie(movie2);

const customer1 = new Customer("John");
const customer2 = new Customer("Alice");

movieStore.addCustomer(customer1);
movieStore.addCustomer(customer2);

movieStore.displayMovieList();

customer1.rentMovie(movie1);
customer2.rentMovie(movie2);

movieStore.displayRentedMovies();

customer1.returnMovie(movie1);
customer2.returnMovie(movie2);

movieStore.displayRentedMovies();
