import React from 'react';
import styled from 'styled-components';
import bible from '../../assets/images/bible.png'
const Loader:React.FC = () => {
  return (
    <>
    <div className="w-full h-screen flex flex-col justify-center items-center welcome">
        <div className="flex items-center justify-center">
            <img src={bible} alt="" />
        </div>
        <StyledWrapper>
          <div className="spinner">
            <span />
            <span />
            <span />
          </div>
        </StyledWrapper>
    </div>
    </>

  );
}

const StyledWrapper = styled.div`
  .spinner {
   --clr: rgb(0, 113, 128);
   --gap: 6px;
     /* gap between each circle */
   width: 100px;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: var(--gap);
  }

  .spinner span {
   width: 20px;
   height: 20px;
   border-radius: 100%;
   background-color: var(--clr);
   opacity: 0;
  }

  .spinner span:nth-child(1) {
   animation: fade 1s ease-in-out infinite;
  }

  .spinner span:nth-child(2) {
   animation: fade 1s ease-in-out 0.33s infinite;
  }

  .spinner span:nth-child(3) {
   animation: fade 1s ease-in-out 0.66s infinite;
  }

  @keyframes fade {
   0%, 100% {
    opacity: 1;
   }

   60% {
    opacity: 0;
   }
  }`;

export default Loader;
