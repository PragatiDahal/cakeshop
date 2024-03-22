import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Main from "./Components/Main";
import Bestcakes from "./Components/Bestcakes";
import Trendingcake from "./Components/Trendingcake";
import Review from "./Components/Review";
import Timeline from "./Components/Timeline";
import Joinus from "./Components/Joinus";
import Footer from "./Components/Footer";
import Cakes from "./Components/Cakes";
import About from "./Components/About";
import Homepage from "./Components/Homepage";
import Birthday from "./Components/Birthday";
import Wedding from "./Components/Wedding";
import Graduation from "./Components/Graduation";
import Theme from "./Components/Theme";
import Login from "./Components/Login";
import AddCart from "./Components/Cart/AddCart";
import Chocolate from "./Components/Cakes/Chocolate";
import Butterscotch from "./Components/Cakes/Butterscotch";
import Redvelvet from "./Components/Cakes/Redvelvet";
import Fruittoppings from "./Components/Cakes/Fruittoppings";
import Pineapple from "./Components/Cakes/Pineapple";
import Heartshape from "./Components/Cakes/Heartshape";
import Blackforest from "./Components/Cakes/Blackforest";
import Whiteforest from "./Components/Cakes/Whiteforest";
import ChocoTruffle from "./Components/Cakes/ChocoTruffle";
import Almond from "./Components/Cakes/Almond";
import Strawberry from "./Components/Cakes/Strawberry";
import Makeuptheme from "./Components/Cakes/Makeuptheme";
import Oreocheese from "./Components/Cakes/Oreocheese";
import Mini from "./Components/Cakes/Mini";
import Blueberry from "./Components/Cakes/Blueberry";
import Kitkat from "./Components/Cakes/Kitkat";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Bestcakes" element={<Bestcakes />} />
          <Route path="/Trendingcake" element={<Trendingcake />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Joinus" element={<Joinus />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Cakes" element={<Cakes />} />
          <Route path="/About" element={<About />} />
          <Route path="/Birthday" element={<Birthday />} />
          <Route path="/Wedding" element={<Wedding />} />
          <Route path="/Graduation" element={<Graduation />} />
          <Route path="/Theme" element={<Theme />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/AddCart" element={<AddCart />} />
          <Route path="/Chocolate" element={<Chocolate />} />
          <Route path="/Butterscotch" element={<Butterscotch />} />
          <Route path="/Redvelvet" element={<Redvelvet />} />
          <Route path="/Blackforest" element={<Blackforest />} />
          <Route path="/Whiteforest" element={<Whiteforest />} />
          <Route path="/Heartshape" element={<Heartshape />} />
          <Route path="/Fruittoppings" element={<Fruittoppings />} />
          <Route path="/Pineapple" element={<Pineapple />} />
          <Route path="/ChocoTruffle" element={<ChocoTruffle />} />
          <Route path="/Almond" element={<Almond />} />
          <Route path="/Makeuptheme" element={<Makeuptheme />} />
          <Route path="/Strawberry" element={<Strawberry />} />
          <Route path="/Oreocheese" element={<Oreocheese/>} />
          <Route path="/Mini" element={<Mini />} />
          <Route path="/Blueberry" element={<Blueberry />} />
          <Route path="/Kitkat" element={<Kitkat />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
