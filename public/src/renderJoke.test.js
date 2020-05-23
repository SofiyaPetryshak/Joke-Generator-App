import renderJoke from "./renderJoke.js"



const example={
  "categories":[],
  "created_at":"2020-01-05 13:42:24.142371",
  "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  "id":"yg8xxWOyRAah1Aglm600DQ",
  "updated_at":"2020-01-05 13:42:24.142371",
  "url":"https://api.chucknorris.io/jokes/yg8xxWOyRAah1Aglm600DQ",
  "value":"Chuck Norris can complete a 1440, triple pump, two hand monster dunk from the midcourt line."
}



test('render joke', () => { 
  const renderedJoke= renderJoke(example);
  
  const jokeText= $(renderedJoke).find(".joke_text").first();
  expect(jokeText.text()).toBe(example.value);
  
  const jokeUpdated= $(renderedJoke).find(".last_update").first();
  expect(jokeUpdated.text()).toBe(`Last update: ${moment(example.updated_at).fromNow()}`);

  const jokeUrl= $(renderedJoke).find("a").first();
  expect(jokeUrl.attr("href")).toBe(example.url);

  const jokeID= $(renderedJoke).find("button").first();
  expect(jokeID.attr("data-id")).toBe(example.id);
});



