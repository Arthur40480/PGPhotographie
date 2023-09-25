import "./legalNoticeContent.css";
import one from "../../../public/1.svg";
import two from "../../../public/2.svg";
import three from "../../../public/3.svg";
import four from "../../../public/4.svg";
import five from "../../../public/5.svg";

function LegalNoticeContent() {
    return (
        <>
        <section className="legal-notice-section">

            <section className="first-legal-notice legal-notice-content">
                <div className="legal-notice-title-container">
                    <img src={one} className="chapter-number-icon" alt="Numéro de la section" />
                    <h2 className="legal-notice-title-content">Informations générales :</h2>
                </div>
                <ul className="legal-notice-list">
                    <li>Nom du site : <span className="proprietary-information">Pierre Gibert Photographie</span></li>
                    <li>Propriétaire du site : <span className="proprietary-information">Pierre Gibert</span></li>
                    <li>Créateur du site : <span className="proprietary-information">Arthur Gibert</span></li>
                    <li>Adresse : <span className="proprietary-information">7 square de pesson, Tosse</span></li>
                    <li>Adresse e-mail : <span className="proprietary-information">pierregibert.photographie@gmail.com</span></li>            
                </ul>
                <ul className="legal-notice-list">
                    <li>Nom de l'hébergeur : <span className="proprietary-information">OVHcloud</span></li>
                    <li>Adresse de l'hébergeur : <span className="proprietary-information"> 2 rue Kellermann - 59100 Roubaix - France</span></li>  
                </ul>
            </section>

            <section className="second-legal-notice legal-notice-content">
                <div className="legal-notice-title-container">
                    <img src={two} className="chapter-number-icon" alt="Numéro de la section" />
                    <h2 className="legal-notice-title-content">Propriété intellectuelle :</h2>
                </div>
                <p className="legal-notice-text">
                    Tous les contenus (textes, images, photographies) présents sur ce site sont la propriété 
                    exclusive de <span className="proprietary-information">Pierre Gibert</span> et sont protégés par les lois sur la propriété intellectuelle. 
                    Toute reproduction ou utilisation non autorisée de ces contenus est strictement interdite.    
                </p>
            </section>

            <section className="third-legal-notice legal-notice-content">
                <div className="legal-notice-title-container">
                    <img src={three} className="chapter-number-icon" alt="Numéro de la section" />
                    <h2 className="legal-notice-title-content">Responsabilité :</h2>
                </div>
                <p className="legal-notice-text">
                    Le propriétaire du site décline toute responsabilité quant à l'utilisation des informations
                    fournies sur ce site. Les informations sont fournies à titre informatif uniquement et peuvent
                    ne pas être à jour.
                </p>
            </section>

            <section className="fourth-legal-notice legal-notice-content">
                <div className="legal-notice-title-container">
                    <img src={four} className="chapter-number-icon" alt="Numéro de la section" />
                    <h2 className="legal-notice-title-content">Commentaires et Données Personnelles :</h2>
                </div>
                <p className="legal-notice-text">
                    Lorsque vous laissez un commentaire sur notre site, nous collectons uniquement les données personnelles que vous 
                    choisissez de nous fournir, notamment votre nom et prénom. Ces informations sont recueillies dans le seul but de 
                    gérer et d'afficher vos commentaires sur notre page. Nous ne vendrons ni ne partagerons ces données avec des tiers 
                    sans votre consentement explicite. Nous nous engageons à respecter votre vie privée et à protéger vos informations 
                    personnelles conformément aux lois applicables en matière de protection des données.
                </p>
            </section>

            <section className="fifth-legal-notice legal-notice-content">
                <div className="legal-notice-title-container">
                    <img src={five} className="chapter-number-icon" alt="Numéro de la section" />
                    <h2 className="legal-notice-title-content">Liens vers des sites tiers :</h2>
                </div>
                <p className="legal-notice-text">
                    Ce site peut contenir des liens vers des sites Web tiers. Le propriétaire du site n'assume 
                    aucune responsabilité pour le contenu ou les pratiques de confidentialité de ces sites.
                </p>
            </section>
        </section>
        </>
    )
}

export default LegalNoticeContent;
