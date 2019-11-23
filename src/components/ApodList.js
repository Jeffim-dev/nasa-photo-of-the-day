import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApodCard from './ApodCard';
import ApodDesc from './ApodDesc';
import ApodNav from './ApodNav';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../App.css";

const ApodList = () => {
    const [pics, setPics] = useState([]);
    
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=9aqs18gQtpAKizqMxpVPXNJLY2IBHwvDKclH1aTF')
        .then(response => {
            setPics(response.data);
            console.log(response);
        })
        .catch(error => console.log(error));
    }, []);

    return (
        <div className="App">
            <div>
               <ApodNav />
            </div>
            <div>
               <ApodCard pic={pics} />                        
            </div>
            <p> </p>
            <div>
               <ApodDesc pic={pics} />    
            </div>
        </div>

    );
}

export default ApodList;