import "./confirmationMessage.css";
import closeConfirmationMsg from "../../../public/close.svg";
import sendIcon from "../../../public/confirmationMessage.svg";
import PropTypes from 'prop-types';

function ConfirmationMessage({ handleClose }) {

    return (
        <>
        <div className="confirmation-msg-overlay" onClick={handleClose}>
            <div className="confirmation-msg-container">
                <div className="confirmation-msg-content">
                    <img className="confirmation-msg-close" src={closeConfirmationMsg} onClick={handleClose} alt="Image de croix pour fermer le message" />
                    <p className="confirmation-msg-txt">Votre commentaire à bien été envoyé.</p>
                    <p className="confirmation-msg-txt">Merci !</p>
                    <img className="confirmation-msg-icon" src={sendIcon} alt="Îcone d'avion en papier 2" />
                </div>
            </div>
        </div>
        </> 
    )
}

ConfirmationMessage.propTypes = {
    handleClose: PropTypes.func
}

export default ConfirmationMessage;
