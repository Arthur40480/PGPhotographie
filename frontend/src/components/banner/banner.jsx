import "./banner.css";
import Logo1 from "../../assets/logo1.png";


function Banner() {
    return (
        <>
            <a href="/">
                <div className="banner">
                    <img src={Logo1} alt="Premier logo du site" className="logo-img"/>
                </div>
            </a>
        </>
    )
}

export default Banner;
