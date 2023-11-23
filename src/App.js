import logo from "./logo.svg";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import AllMeetupsPage from './pages/AllMeetup'
import FavouritesPage from './pages/Favourites';
import NewMeetupsPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/"
          element = {<AllMeetupsPage/>}>
        </Route>
        <Route path="/new-meetup"
        element = {<NewMeetupsPage/>}>
        </Route>
        <Route path="/favourites"
        element = {<FavouritesPage/>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
