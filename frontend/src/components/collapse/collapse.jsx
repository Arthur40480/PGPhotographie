import "./collapse.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow_icon from "./../../../public/arrowCollapse1.svg";
import arrow_icon2 from "./../../../public/arrowCollapse2.svg";
import PropTypes from 'prop-types';

function Collapse({ data: { attributes: { title, subcategories } }, style }) {
    
    // -- Déclaration de state --//
    const [ isOpen, setIsOpen ] = useState(false);

    const listSubCategories = subcategories.data;
    console.log(listSubCategories);

    function openCollapse() {   // Fonction pour ouvrir la collapse
        setIsOpen(!isOpen);
    }

    function listEltCreation(array) {   // Fonction pour afficher chaque sous-catégorie dans le collapse
        return (
            <ul className="collapse-nav-list"
            style={{display: isOpen ? "block" : "none"}}>
                {array.map((cat, index) => (
                    <li className="collapse-nav-li" key={cat + "" + index}>
                        <img className="collapse-li-nav-icon" src={arrow_icon2} alt="Îcone de flêche"></img>
                        <NavLink className="collapse-nav-link" 
                        to={`/gallery/${cat.id}?categoryTitle=${encodeURIComponent(cat.attributes.title)}`}>{cat.attributes.title}</NavLink>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <nav className="collapse-nav" style={style}>
                <div className="collapse-header-nav">
                    <h2 className="collapse-nav-title">{title}</h2>
                    <img 
                    onClick={openCollapse} 
                    className={ isOpen ? "collapse-nav-icon closing" : "collapse-nav-icon opening" } 
                    src={arrow_icon} alt="Îcone de flêche"></img>
                </div>
                {listEltCreation(listSubCategories)}
            </nav>
        </>
    )
}

Collapse.propTypes = {
    data: PropTypes.array,
    style: PropTypes.object
}

export default Collapse;
