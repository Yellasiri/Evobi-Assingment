import React from 'react';
import './a.css';
const PuzzleScreen = ({ parts, onPartSelect, onNextClick }) => {
  return (
    <div>
    <div id="aa" className="scroll-container">
      {parts.map((part, index) => (
        <div  >
        <div key={index}className="card" >
          <img src={part.image} alt={part.name}  width='150px' height='150px' /><br/>
          <input type='checkbox' onClick={() => onPartSelect(index)}/>
          <p>{part.name}</p></div>
        </div>
      ))}
      
    </div>
    <button onClick={onNextClick} className='bb'>Next</button>
    </div>
  );
};

export default PuzzleScreen;
