import "./banner.css"
import Logo1 from "../../assets/logo1.png"
import Logo2 from "../../assets/logo2.png"

function Banner() {
    return (
        <header>
            <a href="/">
                <div className="banner">
                    <img src={Logo1} alt="Premier logo du site" />
                    <img src={Logo2} alt="Deuxième logo du site" />
                </div>
            </a>
        </header>
    )
}

export default Banner;