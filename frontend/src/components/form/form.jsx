import "./form.css";
import img from "../../assets/form_img.jpg";
import send from "../../../public/send.svg";
import { useState } from 'react';
import http from "./../../services/http.js";
import ReCAPTCHA from "react-google-recaptcha";
import React from 'react';
import ConfirmationMessage from "../confirmationMessage/confirmationMessage";

function Form() {

    // -- Déclaration de state --//
    const [isFormValid, setIsFormValid] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
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

    // -- Déclaration de référence --//
    const recaptchaRef = React.useRef();

    // -- Déclaration des expressions régulières (RegEx) --//
    const nameRegEx = /^(?=.{0,30}$)[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)?$/;
    const commentRegEx = /^[a-zA-ZÀ-ÿ0-9\s,!?()\-+=*&#@%$£€:;"']{2,800}$/;
    const siteKey = "6Lc6aewnAAAAABdRrE1jz03zeT63vVNux58wdH8H";

    /**
    * Fonction pour empêcher le click droit
    * @param {event} event 
    */
    function handleRightClick(event) {
        event.preventDefault();
    } 

    /**
     * Fonction qui permet de gérer la soumission du formulaire
     * Avec requête HTTP POST avec les données des commentaires
     * @param {event} event 
     */
    const handleSubmit = (event) => {
        recaptchaRef.current.executeAsync()
            .then((token) => {
            return http.post("/api/comments",
                {
                "data": {
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    comment: formData.comment,
                    recaptchaToken: token
                }
            });
                
        }).then((response) => {
            event.preventDefault();
            setFormData({
                firstname: '',
                lastname: '',
                comment: ''
            });
            setIsFormValid(true);
            setIsVisible(true);
            })

            .catch((error) => {
                return error
            });
    };

    /**
     * Fonction qui vérifie la validité du formulaire
     * @param {event} event 
     */
    const handleFormSubmit = async (event) => { 
        event.preventDefault();
        const isValid = validForm();
        if (isValid) {
            handleSubmit(event);
            }
        };

        function validForm() {  // Fonction qui fait respecter les RegEx dans le formulaire
            let isValid = true;
            const newError = { ...formErrors };
        
            if (formData.firstname.trim() === '') {
                newError.firstname = "Le prénom est requis.";
                isValid = false;

            } else if (!nameRegEx.test(formData.firstname)) {
                newError.firstname = "Le prénom doit contenir entre 2 et 30 caractères alphabétiques maximum.";
                isValid = false;
            }
        
            if (formData.lastname.trim() !== '' && !nameRegEx.test(formData.lastname)) {
                newError.lastname = "Le nom doit contenir 30 caractères alphabétiques maximum.";
                isValid = false;
            }
        
            if (!commentRegEx.test(formData.comment)) {
                newError.comment = "Le commentaire doit contenir entre 2 et 800 caractères maximum.";
                isValid = false;
            }
        
            setformErrors(newError);
            return isValid;
        }

    /**
     * Fonction qui sert à gérer les changements dans les champs de formulaire lorsque l'utilisateur saisit des données
     * @param {event} event 
     */
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

    /**
     * 
     * @param {string} value 
     */
    function onChange(value) {
        console.log("Captcha value:", value);
    }

    const handleCloseConfirmation = () => { // Fonction qui met à jour le state pour afficher ou non le message de confirmation
        setIsVisible(false); 
    };

    return (
        <>
        <section className="form-container">
            <form className="form-golden-book" onSubmit={handleFormSubmit}>
                <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={siteKey}
                    onChange={onChange}
            />
                <label className="short-label">
                    <div>
                        Votre prénom <span className="required-fields">*</span>
                    </div>
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange} required/>
                    {formErrors.firstname && <p className="error-message">{formErrors.firstname}</p>}
                </label>
                <label className="short-label">
                    Votre nom
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange}/>
                    {formErrors.lastname && <p className="error-message">{formErrors.lastname}</p>}
                </label>
                <label className="large-label">
                    <div>
                        Votre commentaire <span className="required-fields">*</span>
                    </div>
                    <textarea name="comment" className="large-field" value={formData.comment} onChange={handleInputChange} required/>
                    {formErrors.comment && <p className="error-message">{formErrors.comment}</p>}
                </label>
                <p className="required-fields-message">Les champs marqués d&lsquo;une ( * ) sont obligatoires.</p>
                <button type="submit" className="form-golden-book-button">
                    Envoyer
                    <img src={send} alt="Îcon d'avion en papier 1" />
                </button>
            </form>
            <div className="img-form-container" onContextMenu={handleRightClick}>
                <img src={img} alt="Photo du formulaire" />
            </div>
        </section>
        {isFormValid && isVisible && (
            <ConfirmationMessage handleClose={handleCloseConfirmation}/>
        )}
        </>
    )
}

export default Form;
