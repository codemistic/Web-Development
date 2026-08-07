let currentPage = 1;
let totalResults = 0;
let allMovies = [];
let filteredMovies = [];
const apiKey = 'xxxxx';  // Your OMDb API Key

document.getElementById('search-button').addEventListener('click', () => {
    currentPage = 1; 
    fetchMovies(currentPage);
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentPage * 10 < totalResults) {
        currentPage++;
        displayMovieList(filteredMovies.slice((currentPage - 1) * 10, currentPage * 10));
        updatePaginationButtons();
    }
});

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayMovieList(filteredMovies.slice((currentPage - 1) * 10, currentPage * 10));
        updatePaginationButtons();
    }
});

document.getElementById('genre-filter').addEventListener('change', filterMovies);
document.getElementById('sort-options').addEventListener('change', sortMovies);

function fetchMovies(page) {
    const movieTitle = document.getElementById('movie-search').value;
    const url = `http://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}&page=${page}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                totalResults = parseInt(data.totalResults);
                allMovies = data.Search;
                fetchAllMovieDetails();
            } else {
                alert("No movies found!");
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function fetchAllMovieDetails() {
    filteredMovies = [];
    let promises = allMovies.map(movie => {
        return fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    filteredMovies.push(data);
                }
            });
    });

    Promise.all(promises).then(() => {
        populateGenreFilter();
        sortMovies();
    });
}

function populateGenreFilter() {
    const genreFilter = document.getElementById('genre-filter');
    let genres = new Set();

    filteredMovies.forEach(movie => {
        if (movie.Genre) {
            movie.Genre.split(", ").forEach(genre => genres.add(genre));
        }
    });

    genreFilter.innerHTML = '<option value="">All Genres</option>';
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.innerText = genre;
        genreFilter.appendChild(option);
    });
}

function filterMovies() {
    const genre = document.getElementById('genre-filter').value;
    if (genre === "") {
        filteredMovies = [...allMovies];
    } else {
        filteredMovies = allMovies.filter(movie => movie.Genre.includes(genre));
    }
    sortMovies();
}

function sortMovies() {
    const sortOption = document.getElementById('sort-options').value;
    if (sortOption === "highestRating") {
        filteredMovies.sort((a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating));
    } else if (sortOption === "lowestRating") {
        filteredMovies.sort((a, b) => parseFloat(a.imdbRating) - parseFloat(b.imdbRating));
    } else if (sortOption === "mostVotes") {
        filteredMovies.sort((a, b) => parseInt(b.imdbVotes.replace(/,/g, '')) - parseInt(a.imdbVotes.replace(/,/g, '')));
    } else if (sortOption === "leastVotes") {
        filteredMovies.sort((a, b) => parseInt(a.imdbVotes.replace(/,/g, '')) - parseInt(b.imdbVotes.replace(/,/g, '')));
    }

    displayMovieList(filteredMovies.slice((currentPage - 1) * 10, currentPage * 10));
    updatePaginationButtons();
}

function displayMovieList(movies) {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';  

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `
            <img class="lazy" data-src="${movie.Poster !== 'N/A' ? movie.Poster : ''}" alt="${movie.Title} Poster" />
            <div class="movie-content">
                <h3 class="movie-title">${movie.Title} (${movie.Year})</h3>
                <div class="movie-details" id="details-${movie.imdbID}">
                    <p><strong>Rating:</strong> ${movie.imdbRating}</p>
                    <p><strong>Total Votes:</strong> ${movie.imdbVotes}</p>
                    <p><strong>Genre:</strong> ${movie.Genre}</p>
                    <p><strong>Plot:</strong> ${movie.Plot}</p>
                    <p><strong>Cast:</strong> ${movie.Actors}</p>
                </div>
            </div>
        `;
        movieList.appendChild(movieItem);
    });

    // Lazy load the images
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(image => loadImage(image));
}

function loadImage(image) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                image.src = image.dataset.src;
                image.classList.remove('lazy');
                observer.unobserve(image);
            }
        });
    });
    observer.observe(image);
}

function updatePaginationButtons() {
    document.getElementById('prev-button').disabled = currentPage === 1;
    document.getElementById('next-button').disabled = currentPage * 10 >= filteredMovies.length;
}
