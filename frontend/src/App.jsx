import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Category from "./pages/Category/category";
import Gallery from "./pages/Gallery/gallery";
import LiensUtiles from "./pages/LiensUtiles/LiensUtiles";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";
import Error from "./pages/Error/Error";
import "./App.css";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/liens-utiles" element={<LiensUtiles />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
};

export default App;
