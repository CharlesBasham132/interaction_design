import React from "react";
import TopLeftTriangle from "./assets/top_left_triangle.png";
import BottomLeftTriangle from "./assets/bottom_right_triangle.png";
import Runner from "./assets/runner.png";

import styled from "styled-components";
import { findByLabelText } from "@testing-library/react";

const OuterWrapper = styled.div`
    background-color: #f9f9;
    width: 100vw;
    height: 100vh;

`;

const StyledWrapper = styled.div`
    display: flex;
    background-color: #E5E5E5;
    justify-content: center;
    height: 70vw;
    flex-direction: row-reverse;
    `;

const StyledHeader = styled.h1`
    text-align: center;
    color: #1e57f1;
    font-size: 40px;
`;

const Week1 = () => (
   <OuterWrapper>
        <img src={TopLeftTriangle} />
        
        <StyledWrapper>
            <div>
                <img src={Runner} />  
                <StyledHeader>Sally</StyledHeader>
            </div>
        </StyledWrapper>
        <img src={BottomLeftTriangle} />
    </OuterWrapper>
    );

export default Week1;