import Home from './components/Home';
import NavbAr from'./components/Navbar';
import FavList from './components/FavList';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
   <>
       <NavbAr />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList  />} />
      </Routes>
    </>
  );

  
}

export default App;
