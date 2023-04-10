//import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

//New Meetups Page
function NewMeetupPage() {
  //const history = useHistory();
  //should not use useHistory hook, it has been changed to useNavigate
  const navigate = useNavigate();

  //function takes the meetupData object
  function addMeetupHandler(meetupData) {
    //default fetch method is a GET
    //hence we need to add a second argument to the fetch function which is an object that allows us to configure the fetch function call and HTTP request for a POST method
    fetch(
      'https://react-meetups-9d939-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
    //history.replace('/');
    //changed from history to navigate
    //allows us to navigate away from the form and back into the AllMeetups page once the request has succeeded
    //replace is used so that we cannot go back to the previous page
    //this makes more sense as we should not be able to go back to the previous page after submitting the form
    navigate('/', { replace: true });
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      {/* the NewMeetupForm component lives here:
      the object from that form with all the input values are passed to this onAddMeetup property which is pointed at the addMeetupHandler function */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;