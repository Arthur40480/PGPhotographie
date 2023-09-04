import "./form.css";
import img from "../../assets/form_img.jpg";
import send from "../../../public/send.svg";
import { useState } from 'react';
import axios from 'axios';
import ModalWindow from "../modalWindow/modalWindow";

function Form() {

        const nameRegEx = /^(?=.{0,30}$)[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)?$/;
        const commentRegEx = /^[a-zA-ZÀ-ÿ0-9\s\.,!?()\-\_+=*&#@%$£€:;"'\/]{2,800}$/;

        const [ formData, setFormData ] = useState({
            firstname: '',
            lastname: '',
            comment: ''
        });

        const [ formErrors, setformErrors ] = useState({
            firstname: '',
            lastname: '',
            comment: ''
        });
    
        const handleSubmit = async (event) => {
            event.preventDefault();
            try {
                const response = axios.post("http://localhost:1337/api/comments", 
                {
                    "data": {
                        firstname: formData.firstname,
                        lastname: formData.lastname,
                        comment: formData.comment
                    }
                });
            } catch (error) {
                console.log("ERREUR", error)
            }
        }
        
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
            setformErrors((prevErrors) => ({
                ...prevErrors,
                [name]: ""
            }))
        };

        const handleFormSubmit = (event) => {
            event.preventDefault();
            const isValid = validForm();

            if(isValid) {
                handleSubmit(event);
            }
        }

        function validForm() {
            var isValid = true;
            const newError = {};

            if(!nameRegEx.test(formData.lastname)) {
                newError.lastname = "Le nom doit contenir 30 caractères alphabétiques maximum."
                isValid = false
            }

            if(!nameRegEx.test(formData.firstname)) {
                newError.firstname = "Le prénom doit contenir entre 2 et 30 caractères alphabétiques maximum."
                isValid = false
            }

            if(!commentRegEx.test(formData.comment)) {
                newError.comment = "Le commentaire doit contenir entre 2 et 800 caractères maximum."
                isValid = false
            }

            setformErrors(newError);
            return isValid;
        };

    return (
        <>
        <section className="form-container">
            <form className="form-golden-book" onSubmit={handleFormSubmit}>
                <label className="short-label">
                    Votre nom
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange}/>
                    {formErrors.lastname && <p className="error-message">{formErrors.lastname}</p>}
                </label>
                <label className="short-label">
                    <div>
                        Votre prénom <span className="required-fields">*</span>
                    </div>
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} required/>
                    {formErrors.firstname && <p className="error-message">{formErrors.firstname}</p>}
                </label>
                <label className="large-label">
                    <div>
                        Votre commentaire <span className="required-fields">*</span>
                    </div>
                    <textarea name="comment" className="large-field" value={formData.comment} onChange={handleInputChange} required/>
                    {formErrors.comment && <p className="error-message">{formErrors.comment}</p>}
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
