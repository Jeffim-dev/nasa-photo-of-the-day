import React from 'react';
import styled from "styled-components";

const H1 = styled.h1`
  padding: 1%
`;

const Img = styled.img`
  width: 50%;
`;

const ApodCard = ({pic}) => {
    
    return (
      <div>
         <H1>Title: {pic.title}</H1> 
         <Img alt='space' src={pic.hdurl} />
      </div>
    );
}

export default ApodCard;
