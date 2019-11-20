import React from 'react';

const ApodCard = props => {
    
    return (
      <div>
          <h2>Title: {props.title}</h2> 
          <img alt='space' src={props.hdurl} />
          <div>
            <p> {props.explanation}</p>
          </div>
      </div>
    );
}
export default ApodCard;
