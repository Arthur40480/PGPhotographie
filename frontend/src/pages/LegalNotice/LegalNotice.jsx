import "./LegalNotice.css";
import LegalNoticeContent from "../../components/legalNoticeContent/legalNoticeContent";

function LegalNotice() {
    
    return (
        <main className="legal-notice-main">
            <div className="legal-notice-container-title">
                <h1 className="legal-notice-title"><span>Mentions légales</span></h1>
            </div>
            <LegalNoticeContent />
        </main>
    )
}

export default LegalNotice;
