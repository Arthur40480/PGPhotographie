import "./Home.css"
import Mouse from "../../components/mouse/mouse";
import WelcomSection from "../../components/welcomSection/welcomSection";


function Home() {
    return (
        <main className="home-main">
            <Mouse />
            <WelcomSection />
        </main>
    )
}

export default Home;
