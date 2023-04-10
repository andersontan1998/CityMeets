import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

//props data received from MeetupList.js
function MeetupItem(props) {
  //use context created from favorites-context.js and store in constant
  const favoritesCtx = useContext(FavoritesContext);

  //use the itemIsFavorite key to check if item is favorited
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  
  //if item is favorited, itemIsFavorite -> itemIsFavoriteHandler function in favorites-context.js will return true
  function toggleFavoriteStatusHandler() {
    //if true (already favorited)
    if (itemIsFavorite) {
      //button will use removeFavorite key to remove item from favorites
      favoritesCtx.removeFavorite(props.id);
    //else if false (not favorited)
    } else {
      //button will use addFavorite key to favorite an item and add to favorites
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    //classes is a naming convention used to import from MeetupItem.module.css for styling
    <li className={classes.item}>
      {/* Use Card to wrap jsx content */}
      <Card>
        <div className={classes.image}>
          {/* props data received from MeetupList.js */}
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        {/* onclick triggers toggleFavoriteStatusHandler function */}
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {/* true or false ? if true: button should say Remove from Favorites, if false: button should say To Favorites */}
            {itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;