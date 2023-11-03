import "./welcomSection.css";
import CategoryButton from "../categoryButton/categoryButton";

function WelcomSection() {
    return(
        <>
            <section className="welcom-section">
                <div className="content-container">
                    <p className="content">C&lsquo;est la faute aux photons si la photo me botte ...</p>
                    <CategoryButton />
                </div>
            </section>
        </>
    )
}

export default WelcomSection;
