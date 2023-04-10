import { createContext, useState } from 'react';

//React's context allows you to share information to any component, by storing it in a central place and allowing access to any component that requests it
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

//use FavoritesContextProvider to wrap everything in index.js
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
  //It is similar to .push but returns a new array and extends this new array with that added meetup which we set as a new state
  function addFavoriteHandler(favoriteMeetup) {
    //pass a function to state updating function so that it recieves the previous state snapshot
    //guarantees that we will be working on the latest state snapshot
    setUserFavorites((prevUserFavorites) => {
      //return updated state
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }
  
  //remove favorited item by using the filter() method which filters down the elements from the given array that pass the test implemented by the provided function
  //returns all items whose id is not equal to the meetupId
  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  //to check if item is already favorited by comparing id
  //return true or false if at least one condition is met 
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {/* children are the components in index.js wrapped by the context tag */}
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;