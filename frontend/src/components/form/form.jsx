import "./form.css";
import img from "../../assets/form_img.jpg";
import send from "../../../public/send.svg";
import { useState } from 'react';
import axios from 'axios';

function Form() {

        const [ formData, setFormData ] = useState({
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
          };

    return (
        <>
        <section className="form-container">
            <form className="form-golden-book" onSubmit={handleSubmit}>
                <label className="short-label">
                    Votre nom
                    <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange}/>
                </label>
                <label className="short-label">
                    <div>
                        Votre prénom <span className="required-fields">*</span>
                    </div>
                    <input type="text" name="firstname" value={formData.firstname} onChange={handleInputChange}/>
                </label>
                <label className="large-label">
                    <div>
                        Votre commentaire <span className="required-fields">*</span>
                    </div>
                    <textarea name="comment" className="large-field" value={formData.comment} onChange={handleInputChange}/>
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
