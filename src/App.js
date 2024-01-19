import logo from "./logo.svg";
import "./App.css";
import AllMeetupsPage from "./pages/AllMeetup";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./component/Layout/MainNavigation";
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNavigation />
      <switch>
        <Routes>
          <Route exact path="/AllMeetup" element={<AllMeetupsPage />}></Route>
          <Route exact path="/Favourites" element={<FavouritesPage/>}></Route>
          <Route exact path="/NewMeetup" element= {<NewMeetupsPage/>}></Route>
        </Routes>
      </switch>
    </div>
  );
}

export default App;
