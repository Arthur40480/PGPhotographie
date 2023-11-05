import http from "../../services/http.js";
import { useState, useEffect } from "react";
import "./category.css";
import Collapse from "../../components/collapse/collapse.jsx";
import backgroundGallery from "../../assets/categorie_img.jpg";
import separator from "../../../public/separateur.svg";

function Category() {

  // -- Déclaration de state --//
  const [ categories, setCategories ] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const collapseStyle1 = {
    position: "absolute",
    top: windowWidth < 480 ? "2.5%" : "10%",
    right: windowWidth < 480 ? "2.5%" : "10%",
  };

  const collapseStyle2 = {
    position: "absolute",
    top: windowWidth < 480 ? "2.5%" : "10%",
    left: windowWidth < 480 ? "2.5%" : "10%",
  };

useEffect(() => { // Appel API en méthode "GET" pour récupérer les catégories
    http.get("/api/categories?populate=*")
    .then(({ data }) => {
      setCategories(data.data);
      displayCategories(data.data);
      console.log(data.data);
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
          <section className="container-category">
            <img className="background-img-category" src={backgroundGallery} alt="Photo du conteneur de catégorie, moitié en noir et blanc à gauche, moitié en couleur à droite"></img>
            <Collapse data={array[0]} style={collapseStyle2} />
            <Collapse data={array[1]} style={collapseStyle1} />
          </section>
          <section className="separator-category-container">
            <img src={separator} alt="Image d'un séparateur pour la page catégorie" />
          </section>
        </>
    )
  }

    return (
      <main className="category-main">
        <div className="container-category-title">
          <h1 id="galerie" className="category-title"><span>Galerie</span></h1>
        </div>
        {categories.length > 0 && displayCategories(categories)}
      </main>
    )
}

  export default Category;
