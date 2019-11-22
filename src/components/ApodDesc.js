import React, { useState } from 'react';
import { Button, Fade } from 'reactstrap';
import styled from "styled-components";

const Exp = styled.p`
    width: 50%;
    margin: auto;
`;

const ApodDesc = ({pic}) => {
    const [fadeIn, setFadeIn] = useState(true);

    const toggle = () => setFadeIn(!fadeIn);

    return (
        <div>
            <Button color="primary" onClick={toggle}>Explanation</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
                <Exp>
                    {pic.explanation}
                </Exp>
            </Fade>
        </div>
    );
}

export default ApodDesc;