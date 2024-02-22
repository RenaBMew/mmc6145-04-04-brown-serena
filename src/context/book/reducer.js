// TODONE: import actions and implement reducer for each action
import { ADD_BOOK, REMOVE_BOOK, SEARCH_BOOKS } from "./actions";

export default function reducer(prevState, { action, payload }) {
  const { favoriteBooks } = prevState;
  switch (action) {
    case ADD_BOOK:
      const addNewFavorite = [...favoriteBooks, payload];
      saveToLocalStorage(addNewFavorite);
      return { ...prevState, favoriteBooks: addNewFavorite };

    case REMOVE_BOOK:
      const removeFavorite = favoriteBooks.filter(
        (book) => book.id !== payload
      );
      saveToLocalStorage(removeFavorite);
      return { ...prevState, favoriteBooks: removeFavorite };

    case SEARCH_BOOKS:
      return { ...prevState, bookSearchResults: payload };
    default:
      return prevState;
  }
}

// This helper function stores the favoriteBook state in localStorage as a string
function saveToLocalStorage(favBooks) {
  localStorage.setItem("favoriteBooks", JSON.stringify(favBooks));
}
