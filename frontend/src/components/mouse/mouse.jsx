import "./mouse.css"
import Image from "../../../public/sourienoire.svg"

function Mouse() {
    return (
        <>
        <div className="container-mouse-img">
            <div className="container-cursor">
                <img className="mouse-img" src={Image} alt="Image d'une souris d'ordinateur" />
                <div className="mouse-cursor"></div>
            </div>
        </div>
        </>
    )
}

export default Mouse
