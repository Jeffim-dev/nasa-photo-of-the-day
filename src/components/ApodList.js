import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApodCard from './ApodCard';


const ApodList = () => {
    const [pic, setPic] = useState([]);
    
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=gD5aGz5VBaGJSoIjcYTT1MOa13zGC6LHEbqMJ8fM')
        .then(response => {
            setPic(response.data);
            console.log(response);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <ApodCard   
                title={pic.title}
                 hdurl={pic.hdurl}
                explanation={pic.explanation} />
        </div>
    );
}

export default ApodList;