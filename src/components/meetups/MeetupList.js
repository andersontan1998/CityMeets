import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

//List component
function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        //passing these fields from AllMeetups.js component -> MeetupList.js (here) -> MeetupItem.js
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
