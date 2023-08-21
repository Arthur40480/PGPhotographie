import axios from "axios";
import { useState, useEffect } from "react";
import "./category.css";
import Collapse from "../../components/collapse/collapse";
import backgroundGallery1 from "../../assets/categorie1_galerie.jpg"
import backgroundGallery2 from "../../assets/categorie2_galerie.jpg"
import separator2 from "../../../public/separateur2.svg"

function Category() {
  const [ categories, setCategories ] = useState([]);

  const collapseStyle1 = {
    position: "absolute",
    top: "50px",
    right: "50px",
  };

  const collapseStyle2 = {
    position: "absolute",
    top: "50px",
    left: "50px", 
  };

  useEffect(() => {
    axios.get("http://localhost:1337/api/categories?populate=*")
    .then(({ data }) => setCategories(data.data))
  }, []);

    return (
      <main className="gallery-main">
        <div className="container-gallery-title">
          <h1 className="gallery-title"><span>Galerie</span></h1>
        </div>
        <section className="first-category-container">
          <img className="first-background-img-gallery" src={backgroundGallery1} alt="Photo d'un bar laisser à l'abandon"></img>
          { categories[0] && (
            <Collapse data={categories[0]} style={collapseStyle1} />
          )}
        </section>
        <section className="separator-container">
          <img src={separator2} alt="Séparateur des deux catégories" />
        </section>
        <section className="second-category-container">
          <img className="second-background-img-gallery" src={backgroundGallery2} alt="Photo d'un bar laisser à l'abandon"></img>
          { categories[0] && (
            <Collapse data={categories[1]} style={collapseStyle2} />
          )}
        </section>
      </main>
    )
  }
  
  export default Category;
