import "./UsefulLink.css";
import LinkContainer from "../../components/linkContainer/linkContainer";

function UsefulLink() {
    return (
        <main className="useful-link-main">
            <div className="container-useful-link-title">
                <h1 id="useful-link" className="useful-link-title"><span>Liens utiles</span></h1>
            </div>
            <LinkContainer />
        </main>
    )
}

export default UsefulLink;
