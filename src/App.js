import './App.css';
//routers
import{Routes, Route} from "react-router-dom"
//React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//pages
import Playpage from './pages/Play.page';
import Moviepage from './pages/Movie.page';
import Homepage from './pages/Home.page';

function App() {
  return (
<Routes>
  <Route path="/"ements={<Homepage/>}/>
  <Route path="/Movie :id" element={<Moviepage/>}/>
  <Route path="/plays" element={<Playpage/>}/>

</Routes>
  );
}

export default App;
