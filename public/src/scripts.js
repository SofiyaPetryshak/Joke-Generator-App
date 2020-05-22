import Store from "./store.js";
import renderAll from "./renderAll.js";

renderAll();

// Show and hide sub radios
$('input[type="radio"]').click(function () {
  if (this.id === "from_categories") {
    document.getElementById("joke_categories").style.display = "block";
    document.getElementById("search_joke").style.display = "none";
  } else if (this.id === "search") {
    document.getElementById("search_joke").style.display = "block";
    document.getElementById("joke_categories").style.display = "none";
  } else {
    document.getElementById("search_joke").style.display = "none";
    document.getElementById("joke_categories").style.display = "none";
  }
});

// Show sidebar

function toggleMobileSidebar() {
  $(".my_container").toggleClass("mobile-sidebar-opened");
}

$("#favourite_menu1").click(toggleMobileSidebar);

$("#favourite_menu2").click(toggleMobileSidebar);



const jokeForm = document.getElementById("get_joke_form");


let jokeCategory;
let jokeQuery;

$(".category").click(function () {
  jokeCategory = this.id;
});

$("#search_joke").change(function () {
  jokeQuery = $(this).val();
});

function fetchJoke(joke_type) {
  function setURL(joke_type) {
    let url;
    if (joke_type === "random") {
      url = "https://api.chucknorris.io/jokes/random";
    } else if (joke_type === "categories") {
      url = "https://api.chucknorris.io/jokes/random?category=" + jokeCategory;
      
    } else {
      url = "https://api.chucknorris.io/jokes/search?query=" + jokeQuery;
    }
    return url;
  }

  return fetch(setURL(joke_type)).then((response) => response.json());
}

jokeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const joke_type = jokeForm.get_joke.value;

  fetchJoke(joke_type).then((data) => {
    if (joke_type === "search") {
      data.result.forEach((dataItem) => {
        Store.addJoke(dataItem);
      });
    } else {
      Store.addJoke(data);
    }
  });
});
