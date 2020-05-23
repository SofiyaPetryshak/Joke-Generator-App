import Store from "./store.js";


function likeHandler(event) {
  const btn = event.currentTarget;

  // Favourites logic
  const favouriteId = btn.dataset.id;
  Store.toggleFavourite(favouriteId);
}

function isLiked(favouriteId) {
  if (Store.state.favouriteIDs.includes(favouriteId)) return true;

  return false;
}

let jokeElem = $(`
    <div class="joke">
      <img src="img/messagew.png" alt="message icon" class="message_icon">
      <div class="id_and_joke">
        <div class="full_id">
          <p class="joke_text_sm">ID:</p>
          <a href="" class="ID_value"></a>
          <img src="img/link.png" alt="" class="link_icon">
        </div>
        <p class="joke_text"></p>
        <div class= "joke_bottom_line"> 
        <p class="joke_text_sm last_update">
           "Last update:"
        </p>
        
        </div>
      </div>
      <button class="heart_btn"  data-id="">
        <svg class="not_liked" aria-label="Like" fill="#FF6767" height="20" viewBox="0 0 48 48" width="17"><path clip-rule="evenodd" d="M34.3 3.5C27.2 3.5 24 8.8 24 8.8s-3.2-5.3-10.3-5.3C6.4 3.5.5 9.9.5 17.8s6.1 12.4 12.2 17.8c9.2 8.2 9.8 8.9 11.3 8.9s2.1-.7 11.3-8.9c6.2-5.5 12.2-10 12.2-17.8 0-7.9-5.9-14.3-13.2-14.3zm-1 29.8c-5.4 4.8-8.3 7.5-9.3 8.1-1-.7-4.6-3.9-9.3-8.1-5.5-4.9-11.2-9-11.2-15.6 0-6.2 4.6-11.3 10.2-11.3 4.1 0 6.3 2 7.9 4.2 3.6 5.1 1.2 5.1 4.8 0 1.6-2.2 3.8-4.2 7.9-4.2 5.6 0 10.2 5.1 10.2 11.3 0 6.7-5.7 10.8-11.2 15.6z" fill-rule="evenodd"></path></svg>
        <svg class="liked" aria-label="Unlike" fill="#FF6767" height="20" viewBox="0 0 48 48" width="17"><path clip-rule="evenodd" d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z" fill-rule="evenodd"></path></svg>
      </button>
    </div>
`);

function renderJoke({ id, value, updated_at, categories }) {
  const [category] = categories;
 
  let URL = `https://api.chucknorris.io/jokes/${id}`;
  let update = moment(updated_at).fromNow();
  let likeState = isLiked(id) ? "liked" : "not_liked";
  let categoryDiv = $(`<div class="caterory_icon"><p class="category_icon_text"></p></div>`);

  let joke = jokeElem.clone();

  joke.find(".joke_text").text(value);
  joke.find("a").text(id);
  joke.find("a").attr("href", URL);
  joke.find(".last_update").text(`Last update: ${update}`);
  joke.find("button").attr("data-id", id);
  joke.find("button").addClass(likeState);

  if(category){
    joke.find(".last_update").after(categoryDiv);
    joke.find(".category_icon_text").text(category);
  }
  

  joke.find(".heart_btn").click(likeHandler);

  return joke;
}

export default renderJoke;
