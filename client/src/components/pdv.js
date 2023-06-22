import React from 'react';
import Navbar from './navbar';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import MOBILIS from './img/MOBILIS.png';
import Slider from './Slider'
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const BackgroundImage = styled.div`
  background-image: url(${MOBILIS});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: calc(120vh - 80px); /* La hauteur de la barre de navigation (par exemple 64px) */
`;

const Pdv = () => {
  return (
    <div>  <Navbar />
   <Slider/>
   </div>
        
    
  );
}

export default Pdv;
