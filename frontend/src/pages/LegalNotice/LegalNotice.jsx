import "./LegalNotice.css";
import legalNoticeContent from "../../components/legalNoticeContent/legalNoticeContent";

function LegalNotice() {
    return (
        <main className="legal-notice-main">
            <div className="legal-notice-container-title">
                <h1 className="legal-notice-title"><span>Mentions légales</span></h1>
            </div>
            <legalNoticeContent />
        </main>
    )
}

export default LegalNotice;
