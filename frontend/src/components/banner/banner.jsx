import "./banner.css";
import Logo from "../../assets/logo1.png";

function Banner() {
    return (
        <>
            <a href="/">
                <div className="banner">
                    <img src={Logo} alt="Logo du site PGPhotographie" className="logo-img"/>
                </div>
            </a>
        </>
    )
}

export default Banner;
