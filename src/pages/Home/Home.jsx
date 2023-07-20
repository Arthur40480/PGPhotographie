import "./Home.css"
import Header from "../../components/header/header";
import Mouse from "../../components/mouse/mouse";
import Footer from "../../components/footer/footer";

function Home() {
    return (
        <main className="home-main">
            <Header />
            <Mouse />
            <Footer/>
        </main>
    )
}

export default Home;
