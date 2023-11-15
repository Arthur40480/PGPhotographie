import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Gallery from "./pages/Gallery/Gallery";
import GoldenBook from "./pages/GoldenBook/GoldenBook";
import LegalNotice from "./pages/LegalNotice/LegalNotice";
import UsefulLink from "./pages/UsefulLink/UsefulLink";
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
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/useful-link" element={<UsefulLink />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
