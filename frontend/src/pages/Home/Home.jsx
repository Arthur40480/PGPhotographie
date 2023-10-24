import "./Home.css";
import WelcomSection from "../../components/welcomSection/welcomSection";
import News from "../../components/news/news";

function Home() {

    return (
        <main className="home-main">
            <WelcomSection />
            <News />
        </main>
    )
}

export default Home;
