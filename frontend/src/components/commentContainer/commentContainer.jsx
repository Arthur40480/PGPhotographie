import "./commentContainer.css";
import http from "./../../services/http.js";
import { useState, useEffect, useRef } from "react";

function CommentContainer() {
    
    // -- Déclaration de state --//
    const [commentObject, setCommentObject] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // -- Déclaration de référence --//
    const commentContainerRef = useRef(null);

    const commentsPerPage = 8;
    const indexOfLastComment = currentPage * commentsPerPage;
    const indexOfFirstComment = indexOfLastComment - commentsPerPage;
    const currentComments = commentObject.filter(comment => comment.attributes.validate === true).slice(indexOfFirstComment, indexOfLastComment);

    useEffect(() => {   // Appel API en méthode "GET" pour récupérer les commentaires
        http.get("/api/comments?populate=*")
        .then(({ data }) => reverseData(data.data))
        .catch((error) => console.log(error))
    }, []);

    /**
     * Fonction qui inverse l'ordre des commentaires et les envoie dans l'état (state) commentObject
     * @param {object} data 
     */
    function reverseData(data) {
        const reversed = [...data].reverse();
        setCommentObject(reversed);
    }

    /**
     * Fonction qui vient formater les dates reçues 
     * @param {string} string 
     * @returns {string}
     */
    function formatDate(string) {
        const originalDate = string;
        const newDate = originalDate.slice(0, 10);
        const reverseDate = newDate.split('-');
        const formattedDate = `${reverseDate[2]} - ${reverseDate[1]} - ${reverseDate[0]}`
        
        return formattedDate;
    }

    /**
     * Fonction qui récupère la première lettre du commentateur
     * @param {string} string 
     * @returns {string}
     */
    function firstLetter(string) {
        const originalName = string;
        const firstLetter = originalName.charAt(0);
        
        return firstLetter;
    }

    function getRandomColor() { // Fonction qui renvoi une couleur aléatoire
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 3; i++) {
            color += letters[Math.floor(Math.random() * 10) + 6];
        }
        return color;
    }

    /**
     * Fonction qui permet de changer de page
     * @param {number} page 
     */
    function changeCommentPage(page) {
        setCurrentPage(page);
        setTimeout(() => {
            commentContainerRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 0)
    }

    return (
        <>
            <section className="comment-container" ref={commentContainerRef}>
            {currentComments.map((comment, index) => (
                <div key={index} className="comment-card">
                    <header className="comment-header">
                        <span className="comment-pp" style={{ backgroundColor: getRandomColor()}}>{firstLetter(comment.attributes.firstname)}</span>
                        <p className="comment-author">{comment.attributes.firstname} {comment.attributes.lastname}</p>
                        <p className="comment-date">{formatDate(comment.attributes.publishedAt)}</p>
                    </header>
                    <p className="comment-content">{comment.attributes.comment}</p>                    
                </div>
            ))}
                <div className="paging-comment-container">
                {Array.from({ length: Math.ceil(commentObject.filter(comment => comment.attributes.validate === true).length / commentsPerPage) }, (_, index) => (
                    <button key={index} onClick={() => changeCommentPage(index + 1)} className={currentPage === index + 1 ? "current-button-paging-comment" : "button-paging-comment"}>
                        {index + 1}
                    </button>
                ))}
                </div>
            </section>
        </>
    )
}

export default CommentContainer;
