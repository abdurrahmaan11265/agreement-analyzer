"use client";
import React from 'react';
import styled from 'styled-components';
import { VscGraph } from "react-icons/vsc";
import Link from 'next/link';

const Header = () => {
  React.useEffect(() => {
    // Client-side only logic here
  }, []);

  return (
    <div className='flex justify-center min-h-8 align-middle p-8'>
      <StyledWrapper>
        <div className="button-container">
          <button className="button">
            <Link href='/'>
              <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
              </svg>
            </Link>
          </button>
          <button className="button">
            <Link href='/analyse'>
              <VscGraph className='h-[1.5em] w-[1.5em]' />
            </Link>
          </button>
        </div>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .button-container {
    display: flex;
    background-color: #230046;
    width: 40vw;
    max-width: 500px;
    height: 49px;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: 0px 0px 8px 6px #000000;
  }

  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }

  .button:hover {
    transform: translateY(-3px);
  }

  .icon {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    .button-container {
      width: 100%;
      padding: 0 10px;
    }

    .button {
      width: 35px;
      height: 35px;
    }

    .icon {
      font-size: 18px;
    }
  }
`;

export default Header;
