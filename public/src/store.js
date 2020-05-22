import renderAll from "./renderAll.js";



export class Store{

  set state(state){ 
  localStorage.setItem("state", JSON.stringify(state));
}
  
get state() {
  return JSON.parse(localStorage.getItem('state')) || {
      jokeIDs:[],
      jokes: {},
      favouriteIDs: []};
  }  


  get jokesIDs(){
    return this.state.jokeIDs;
  }

  addJoke(joke){
    let state_snapshot= this.state;
    state_snapshot.jokes[joke.id]=joke;
    state_snapshot.jokeIDs.push(joke.id);

    this.state= state_snapshot;
    renderAll();
  }

get jokes(){
  return this.state.jokes;
}

get favJokesIDs(){
  return this.state.favouriteIDs;
}

  toggleFavourite(favouriteId){
    let state_snapshot=this.state;
    if (state_snapshot.favouriteIDs.includes(favouriteId)) {
      state_snapshot.favouriteIDs = state_snapshot.favouriteIDs.filter((id) => id !== favouriteId);
      
    } else {
      state_snapshot.favouriteIDs = state_snapshot.favouriteIDs.concat(favouriteId);
     
    }
    console.log(this.state, state_snapshot);
    this.state= state_snapshot;
    renderAll();
  }

 
};



export default new Store();