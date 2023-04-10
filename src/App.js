import { Route, Routes } from 'react-router-dom';
//import { Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    //Layout component holds navbar
    <Layout>
      {/* 
      Routes for navigation:
      Latest version of react-router-dom does not need a "switch" and the structure is different.
      Switch is used to tell React that only one of these routes should be active at a time so /favorites would
      not show both components in / and /favorites
      */}
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;