import "./form.css";
import img from "../../assets/form_img.jpg";
import send from "../../../public/send.svg";
import { useState, useRef } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';

function Form() {

        const recaptchaRef = React.useRef();
        const nameRegEx = /^(?=.{0,30}$)[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)?$/;
        const commentRegEx = /^[a-zA-ZÀ-ÿ0-9\s\.,!?()\-\_+=*&#@%$£€:;"'\/]{2,800}$/;
        const siteKey = "6Lc6aewnAAAAABdRrE1jz03zeT63vVNux58wdH8H";

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
    
        const handleSubmit = (event) => {
            recaptchaRef.current.executeAsync()
                .then((token) => {
                // Vous pouvez appliquer le token aux données du formulaire ici si nécessaire
                // formData.recaptchaToken = token;

                return axios.post("http://localhost:1337/api/comments",
                    {
                    "data": {
                        firstname: formData.firstname,
                        lastname: formData.lastname,
                        comment: formData.comment,
                      // Ajoutez le token ReCAPTCHA ici si nécessaire
                        recaptchaToken: token
                    }
                    });
                })
                .then((response) => {
                console.log("Réponse de la requête:", response.data);
                console.log("Formulaire envoyé avec succès !");
                })
                .catch((error) => {
                console.log("ERREUR", error);
                console.log("Formulaire erroné !");
                });

            event.preventDefault(); // Vous pouvez déplacer cette ligne à l'intérieur de la promesse si nécessaire
        };
        
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            const isValid = validForm();
            if (isValid) {
                handleSubmit(event);
                console.log("Formulaire envoyé avec succès !");
            } else {
                console.log("Formulaire erroné !");
            }
        };

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

        function onChange(value) {
            console.log("Captcha value:", value);
        }
        

    return (
        <>
        <section className="form-container">
            <form className="form-golden-book" onSubmit={handleFormSubmit}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lc6aewnAAAAABdRrE1jz03zeT63vVNux58wdH8H"
                    onChange={onChange}
            />
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
