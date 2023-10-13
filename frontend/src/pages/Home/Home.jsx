import "./Home.css";
import WelcomSection from "../../components/welcomSection/welcomSection";
import News from "../../components/news/news";
import img3 from "../../assets/accueil_img_3.jpg";

function Home() {

    return (
        <main className="home-main">
            <WelcomSection />
            <News />
            <div className="home-cover">
                <div className="home-cover-container">
                    <img className="home-cover-img" src={img3} alt="Photo de l'accueil 3 : paysage" />
                </div>
            </div>
        </main>
    )
}

export default Home;
