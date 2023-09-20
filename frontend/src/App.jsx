import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/category";
import Gallery from "./pages/Gallery/gallery";
import GoldenBook from "./pages/GoldenBook/GoldenBook";
import Error from "./pages/Error/Error";
import "./App.css";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/golden-book" element={<GoldenBook />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
