import React from 'react';
import alma from './alma1.jpg';
import alma2 from './alma2.jpg';
const ResultScreen = ({ assembledImage }) => {
  return (
    <div>
      <h2>Assembled Product</h2>
      <img src={assembledImage} alt="Assembled Product" />
      <img src={alma2} alt="front" />
      <img src={alma} alt="back" />
      
    </div>
  );
};

export default ResultScreen;
