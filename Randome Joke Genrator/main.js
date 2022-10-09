const jokeText = document.querySelector('.joke-text');
const newJokeBtn = document.getElementById('new-button');

getJoke();

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const joke = data.joke;
        jokeText.innerText = joke;
    });
}

newJokeBtn.onclick = () => getJoke()