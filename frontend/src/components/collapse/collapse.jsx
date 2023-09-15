import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./collapse.css";
import arrow_icon from "./../../../public/12.svg";
import arrow_icon2 from "./../../../public/13.svg"

function Collapse({ data: { attributes: { title, subcategories } }, style }) {
    
    const [ isOpen, setIsOpen ] = useState(false);
    const listSubCategories = subcategories.data;

    function openCollapse() {
        setIsOpen(!isOpen);
    };

    function listEltCreation(array) {
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
};

export default Collapse;
