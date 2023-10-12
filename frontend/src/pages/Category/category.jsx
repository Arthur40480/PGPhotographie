import http from "../../services/http.js";
import { useState, useEffect } from "react";
import "./Category.css";
import Collapse from "../../components/collapse/collapse.jsx";
import backgroundGallery1 from "../../assets/categorie1_galerie.jpg"
import backgroundGallery2 from "../../assets/categorie2_galerie.jpg"
import separator from "../../../public/separateur.svg"

function Category() {

  // -- Déclaration de state --//
  const [ categories, setCategories ] = useState([]);

  const collapseStyle1 = {
    position: "absolute",
    top: "10%",
    right: "10%",
  };

  const collapseStyle2 = {
    position: "absolute",
    top: "10%",
    left: "10%", 
  };

useEffect(() => { // Appel API en méthode "GET" pour récupérer les catégories
    http.get("/api/categories?populate=*")
    .then(({ data }) => {
      setCategories(data.data);
      displayCategories(data.data);
    });
  }, []);

  /**
   * Fonction pour afficher chaque catégorie 
   * @param {array} array 
   * @returns {React.ReactNode}
   */
  function displayCategories(array) {
    return (
      <>
        {array.map((cat, index) => (
          <>
            <section className="container-category" key={index}>
              <img className="background-img-category" src={`http://localhost:1337${cat.attributes.picture.data.attributes.url}`} alt={`Photo de la catégorie ${cat.attributes.rank}`}></img>
              { array.length !== 0 && (
                <Collapse data={cat} style={cat.attributes.rank % 2 === 0 ? collapseStyle2 : collapseStyle1} />
              )}
            </section>
            <section className="separator-category-container">
              <img src={separator} alt={`Séparateur ${cat.attributes.rank}`} />
            </section>
          </>
        ))}
      </>
    )
  }

    return (
      <main className="category-main">
        <div className="container-category-title">
          <h1 className="category-title"><span>Galerie</span></h1>
        </div>
        {categories.length > 0 && displayCategories(categories)}
      </main>
    )
  }

  export default Category;
