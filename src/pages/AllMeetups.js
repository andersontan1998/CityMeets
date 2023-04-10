import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

//All Meetups Page
function AllMeetupsPage() {
  //for loading state
  //first element in the array is the snapshot (var that holds everything), second element is a function to change the state
  const [isLoading, setIsLoading] = useState(true);
  //for meetups state
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  
  //useEffect is a hook that allows you to run some code under certain conditions
  //needed because the code for sending the request always runs when the component function runs hence a infinite loop
  useEffect(() => {
    setIsLoading(true);
    //using default fetch get method to grab data from firebase
    //'/meetups' is the collection and .json is required for firebase reference url
    fetch(
      'https://react-meetups-9d939-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        //for every key(some encrypted letters) in the data, create a meetup object and push into helper array
        //...data[key] means that the rest of the data under that key will be added to the object
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          /*
          required fields:
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
          */

          meetups.push(meetup);
        }
        //change loading state to false if there is meetups data
        setIsLoading(false);
        //change meetups state from empty array to hold meetups array
        setLoadedMeetups(meetups);
      });
      //arguments: external dependencies
  }, []);

  //loading state
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* loadedMeetups is the snapshot of the meetups state 
      we are passing it into MeetupList component */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;