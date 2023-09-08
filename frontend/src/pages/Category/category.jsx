import axios from "axios";
import { useState, useEffect } from "react";
import "./category.css";
import Collapse from "../../components/collapse/collapse";
import backgroundGallery1 from "../../assets/categorie1_galerie.jpg"
import backgroundGallery2 from "../../assets/categorie2_galerie.jpg"
import separator from "../../../public/separateur.svg"

function Category() {
  const [ categories, setCategories ] = useState([]);

  const collapseStyle1 = {
    position: "absolute",
    top: "80px",
    right: "80px",
  };

  const collapseStyle2 = {
    position: "absolute",
    top: "80px",
    left: "80px", 
  };

  useEffect(() => {
    axios.get("http://localhost:1337/api/categories?populate=*")
    .then(({ data }) => setCategories(data.data))
  }, []);

    return (
      <main className="category-main">
        <div className="container-category-title">
          <h1 className="category-title"><span>Galerie</span></h1>
        </div>
        <section className="container-category">
          <img className="background-img-category" src={backgroundGallery1} alt="Photo d'un bar laisser à l'abandon"></img>
          { categories[0] && (
            <Collapse data={categories[0]} style={collapseStyle1} />
          )}
        </section>
        <section className="separator-category-container">
          <img src={separator} alt="Séparateur des deux catégories" />
        </section>
        <section className="container-category">
          <img className="background-img-category" src={backgroundGallery2} alt="Photo d'un bar laisser à l'abandon"></img>
          { categories[0] && (
            <Collapse data={categories[1]} style={collapseStyle2} />
          )}
        </section>
      </main>
    )
  }
  
  export default Category;
