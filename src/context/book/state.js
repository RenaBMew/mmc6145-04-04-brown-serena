// TODONE: initial state should have keys bookSearchResults [] and favoriteBooks

// TODONE: Load/parse 'favoriteBooks' from localStorage
// "favoriteBooks" = value from localStorage or if localStorage falsy = empty array

const localFavoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks"));
const favoriteBooks = localFavoriteBooks ? localFavoriteBooks : [];
const initialState = { bookSearchResults: [], favoriteBooks };

export default initialState;
