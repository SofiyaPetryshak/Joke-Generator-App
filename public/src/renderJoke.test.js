
import renderJoke from "./renderJoke.js"
import $ from "jquery"
import moment from "moment"
global.$ = $
global.jQuery = $
global.moment = moment

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
  expect(jokeText.text()).toBe(example.value) });