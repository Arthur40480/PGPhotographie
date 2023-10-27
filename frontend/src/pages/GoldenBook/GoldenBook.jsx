import "./GoldenBook.css";
import Form from "../../components/form/form";
import separator from "./../../../public/separateur.svg";
import CommentContainer from "../../components/commentContainer/commentContainer";

function GoldenBook() {
    
    return (
        <main className="golden-book-main">
            <div className="container-golden-book-title">
                <h1 id="golden-book" className="golden-book-title"><span>Livre d&lsquo;Or</span></h1>
                <p className="golden-book-introduction">N&lsquo;hésitez pas à laisser un commentaire pour partager vos impressions sur mes photos.</p>
                <p className="golden-book-introduction">Merci.</p>
            </div>
            <Form />
            <img src={separator} alt="Image de séparateur du formulaire" className="golden-book-separator"/>
            <CommentContainer />
        </main>
    )
}

export default GoldenBook;
