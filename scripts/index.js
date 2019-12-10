window.onload = async function () {
    const getJokeButton = document.getElementsByClassName('joke-button')[0];
    const jokeContent = document.getElementsByClassName('joke')[0];
    const startJoke = await getAJoke();

    jokeContent.innerHTML = startJoke.joke


    getJokeButton.addEventListener('click', async function () {
        const joke = await getAJoke();

        jokeContent.innerHTML = joke.joke
    });
}

async function getAJoke() {
    const response = await fetch('https://icanhazdadjoke.com', {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json'
        },
    });

    return await response.json();
}

