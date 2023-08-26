import "./form.css";
import img from "../../assets/form_img.jpg";
import send from "../../../public/send.svg";

function Form() {
    return (
        <>
        <section className="form-container">
            <form className="form-golden-book">
                <label className="short-label">
                    Votre nom
                    <input type="text" name="lastName"/>
                </label>
                <label className="short-label">
                    <div>
                        Votre prénom <span className="required-fields">*</span>
                    </div>
                    <input type="text" name="firstName"/>
                </label>
                <label className="large-label">
                    <div>
                        Votre commentaire <span className="required-fields">*</span>
                    </div>
                    <textarea name="comment" className="large-field"/>
                </label>
                <button type="submit" className="form-golden-book-button">
                    Envoyer
                    <img src={send} alt="Îcon d'avion en papier" />
                </button>
            </form>
            <div className="img-form-container">
                <img src={img} alt="Photo de paysage" />
            </div>
        </section>
        </>
    )
};

export default Form;
