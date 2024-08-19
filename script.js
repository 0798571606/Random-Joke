const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url =
  'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

let getJoke = () => {
  fetch(url)
    .then((res) => res.json())
    .then((item) => {
      jokeContainer.textContent = item.joke;
    });
};

getJoke();
btn.addEventListener('click', getJoke);
