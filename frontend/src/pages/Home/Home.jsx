import "./Home.css"
import WelcomSection from "../../components/welcomSection/welcomSection";
import img3 from "../../assets/accueil_img_3.jpg"

function Home() {
    return (
        <main className="home-main">
            <WelcomSection />
            <section className="news-section">
                <h2 className="news-title">Actualités</h2>
                <div className="news-content">
                    <h3>Titre</h3>
                    <p>Lieu - date</p>
                    <p>Description</p>
                </div>
            </section>
            <div className="home-cover">
                <div className="home-cover-container">
                    <img className="home-cover-img" src={img3} alt="Photo de paysage" />
                </div>
            </div>
        </main>
    )
}

export default Home;
