import "./welcomSection.css";
import img1 from "../../assets/accueil_img_1.jpg";
import img2 from "../../assets/accueil_img_2.jpg";
import CategoryButton from "../categoryButton/categoryButton";

function WelcomSection() {
    return(
        <>
            <section className="welcom-section">
                <div className="welcom-container-img">
                    <img className="welcom-img" src={img1} alt="Photo d'accueil 1 : Une corbeille de fruit"/>
                </div>
                <div className="content-container">
                    <div className="content">
                        <p>Entrez dans mon univers capturé par l&lsquo;objectif,<br></br>
                        où chaque instant est figé avec passion et créativité.<br></br>
                        Bienvenue dans l&lsquo;album de  mes images.</p>
                    </div>
                    <CategoryButton />
                </div>
                <div className="welcom-container-img">
                    <img className="welcom-img" src={img2} alt="Photo d'accueil 2 : paysage"/>
                </div>
            </section>
        </>
    )
}

export default WelcomSection;
