import "./commentContainer.css";
import axios from "axios";
import { useState, useEffect } from "react";

function CommentContainer() {

    const [commentObject, setCommentObject] = useState([])

    useEffect(() => {
        axios.get("http://localhost:1337/api/comments")
        .then(({ data }) => setCommentObject(data.data))
        .catch((error) => console.log(error))
    }, []);

    function formatDate(string) {
        const originalDate = string;
        const newDate = originalDate.slice(0, 10);
        const reverseDate = newDate.split('-');
        const formattedDate = `${reverseDate[2]} - ${reverseDate[1]} - ${reverseDate[0]}`
        
        return formattedDate;
    }

    function firstLetter(string) {
        const originalName = string;
        const firstLetter = originalName.charAt(0);
        
        return firstLetter;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        const color = '#';
    
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    return (
        <>
            <section className="comment-container">
            {commentObject.filter(comment => comment.attributes.validate === true).map((comment, index) => (
                <div key={index} className="comment-card">
                    <header className="comment-header">
                        <span className="comment-pp" style={{"backgroundColor": getRandomColor}}>{firstLetter(comment.attributes.firstname)}</span>
                        <p className="comment-author">{comment.attributes.firstname} {comment.attributes.lastname}</p>
                        <p className="comment-date">{formatDate(comment.attributes.publishedAt)}</p>
                    </header>
                    <p className="comment-content">{comment.attributes.comment}</p>
                    
                </div>
            ))}
            </section>
        </>
    )
};

export default CommentContainer;
