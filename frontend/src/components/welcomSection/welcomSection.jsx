import "./welcomSection.css";
import img1 from "../../assets/accueil_img_1.jpg";
import img2 from "../../assets/accueil_img_2.jpg";
import CategoryButton from "../categoryButton/categoryButton";

function WelcomSection() {
    return(
        <>
            <section className="welcom-section">
                <div className="welcom-container-img">
                    <img className="welcom-img" src={img1} alt="Photo d'une corbeille de fruit"/>
                </div>
                <div className="content-container">
                    <div className="content">
                        <p>Entrez dans mon univers capturé par l&rsquo;objectif,<br></br>
                        où chaque instant est figé avec passion et créativité.<br></br>
                        Bienvenue dans l&rsquo;album de  mes images.</p>
                    </div>
                    <CategoryButton />
                </div>
                <div className="welcom-container-img">
                    <img className="welcom-img" src={img2} alt="Photo de paysage"/>
                </div>
            </section>
        </>
    )
}

export default WelcomSection;
