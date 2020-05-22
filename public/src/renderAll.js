import Store from "./store.js"
import renderJoke from "./renderJoke.js";
import renderFavouriteJoke from "./renderFavJoke.js"

function renderFavourites() {
  const $favJokeSection = $("#fav_joke_section");
  $favJokeSection.html("");
  Store.favJokesIDs.forEach((id) => {
  const joke = Store.jokes[id];
  const favouriteEl = renderFavouriteJoke(joke);

  $favJokeSection.prepend(favouriteEl);
  });
}

function renderJokes() {
  const $jokeSection = $("#joke_section");
  $jokeSection.html("");
  Store.jokesIDs.forEach((id) => {
  const joke = Store.jokes[id];
  const jokeEl = renderJoke(joke);

  $jokeSection.prepend(jokeEl);
  });
}

export default function renderAll(){
  renderFavourites();
  renderJokes();
}