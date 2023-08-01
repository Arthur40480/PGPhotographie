import { useState } from "react";
import "./collapse.css";
import arrow_icon from "./../../../public/12.svg";
import arrow_icon2 from "./../../../public/13.svg"

function Collapse() {

    const [ isOpen, setIsOpen ] = useState(false);
    const categorie = [ 
        "Paysage",
        "Portrait",
        "Animaux",
        "Voiture",
        "Nature",
        "Sport",
        "Voiture",
        "Moto",
        "Paysage",
        "Portrait",
        "Animaux",
        "Voiture",
        "Nature",
        "Sport",
        "Voiture"];

    function arrayTreatment(array) {
        const groupes = [];
        for (let i = 0; i < array.length; i += 20) {
            groupes.push(array.slice(i, i + 20));
        }
        return groupes
    };

    const listGroups = arrayTreatment(categorie);

    function listEltCreation(array) {
        return array.map((element, index) => (
            <ul className="collapse-nav-list" key={index}>
                { element.map((cat) => (
                    <li className="collapse-nav-li" key={cat}>
                        <img className="collapse-li-nav-icon" src={arrow_icon2} alt="Îcone de flêche"></img>
                        {cat}
                    </li>
                ))}
            </ul>
        ))
    };

    function openCollapse() {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="collapse-nav">
                <div className="collapse-header-nav">
                    <h2 className="collapse-nav-title">Couleur</h2>
                    <img 
                    onClick={openCollapse} 
                    className={ isOpen ? "collapse-nav-icon opening" : "collapse-nav-icon closing" } 
                    src={arrow_icon} alt="Îcone de flêche"></img>
                </div>
                <div 
                className="content-nav-category-open"
                style={{display: isOpen ? "none" : "flex" }}>
                    {listEltCreation(listGroups)}
                </div>
            </nav>
        </>
    )
};

export default Collapse;
