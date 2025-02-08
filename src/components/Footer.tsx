"use client";
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledWrapper>
            <div className="card rounded-t-xl flex justify-center align-middle">
                <p className='pt-4 text-white'>@{new Date().getFullYear()} Agreement Analyzer. All rights reserved.</p>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 7vh;
    background-color: #230046;
    background-image: linear-gradient(43deg, #141414 0%, #282828 46%, #320064 100%);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
                rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
                rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
                rgba(0, 0, 0, 0.06) 0px 2px 1px, 
                rgba(0, 0, 0, 0.09) 0px 4px 2px;
  }`;

export default Footer;
