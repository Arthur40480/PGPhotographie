import "./picture.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Picture() {
    const [ photoData, setPhotoData ] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        axios.get("http://localhost:1337/api/subcategories?populate[0]=photos.src")
            .then(({data}) => setPhotoData(data.data[id - 1]))
    }, []);

    function extractPhotoURLs(array) {
        console.log(array.attributes.photos.data);
    };
    
    extractPhotoURLs(photoData);

    return (
        <>
        </>
    )
}
export default Picture;
