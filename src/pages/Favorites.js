import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

//Favorites Page
function FavoritesPage() {
  //use context created from favorites-context.js and store in constant
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  //check length of totalFavorites which is a key in FavoritesContext
  //if no favorites
  if (favoritesCtx.totalFavorites === 0) {
    //display this
    content = <p>You got no favorites yet. Start adding some?</p>;
  //otherwise pass favorites data in MeetupList
  //both AllMeetups.js and Favorites.js pages re-use MeetupList and MeetupItem components
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;