import "./WelcomSection.css"
import img1 from "../../assets/accueil_img_1.jpg"
import img2 from "../../assets/accueil_img_2.jpg"
import guillement1 from "../../../public/guillemet1.svg"
import guillement2 from "../../../public/guillemet2.svg"
import GalleryButton from "../galleryButton/galleryButton"

function WelcomSection() {
    return(
        <>
            <section className="welcom-section">
                <div className="welcom-container-img">
                    <img className="welcom-img" src={img1} alt="Photo d'une corbeille de fruit"/>
                </div>
                <div className="content-container">
                    <div className="content">
                        <img className="quotation-img" src={guillement2} alt="Guillemets"/>
                        <p>Entrez dans mon univers capturé par l'objectif,<br></br>
                        où chaque instant est figé avec passion et créativité.<br></br>
                        Bienvenue dans l'album de  mes images.</p>
                        <img className="quotation-img" src={guillement1} alt="Guillemets"/>
                    </div>
                    <GalleryButton />
                </div>
                <div className="welcom-container-img">
                    <img className="welcom-img" src={img2} alt="Photo de paysage"/>
                </div>
            </section>
        </>
    )
}

export default WelcomSection;
