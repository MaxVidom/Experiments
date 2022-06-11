import card from './templates/film-card.hbs';
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '?api_key=2ddded2d287329b6efbf335a6f8f3bd4';

const refs = {
    cards: document.querySelector(".card-list"),
}
async function fetchFilms(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

function filmCardsMarkup(data) {
    console.log(card(data));
    refs.cards.insertAdjacentHTML("afterbegin", card(data));
}

console.log("done");

fetchFilms(`${BASE_URL}/trending/all/day${KEY}`)
    .then(data => {
        console.log(data.results);
        filmCardsMarkup(data.results);
    }).catch(error => console.log(error));


