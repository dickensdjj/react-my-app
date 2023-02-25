import {Todo} from "./components/Todo";

import {AllMeetupsPage} from "./pages/AllMeetups";
import {NewMeetupsPage} from "./pages/NewMeetup";
import {FavoritesPage} from "./pages/Favorites";
import {Route, Routes} from "react-router-dom";

export const App = () => {
  return (
    // TODO: why routes is not resolved correctly?
    <Routes>
      {/*TODO: why element but not component?*/}
      {/*TODO: How to read the Route index.d.ts? Any clue or hint or skill on reading through the code?*/}
      <Route exact path='/' element={<AllMeetupsPage/>} />
      <Route exact path='/Favorites' element={<FavoritesPage/>} />
      <Route exact path='/new' element={<NewMeetupsPage/>} />
    </Routes>
  );
};
