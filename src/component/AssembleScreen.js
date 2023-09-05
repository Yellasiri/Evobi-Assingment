import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Part from './Part';

import DragAndDrop from './Dragg';
import './ImageScroll.css'; // Create a CSS file for styling

const AssembleScreen = ({ parts, onAssembleClick }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
      <div id="acd" className="image-scroll-container">
      {parts.map((part, index) => (
  <Part key={index} id={index} name={part.name} image={part.image} className="myPart">
    {/* Set width and height */}
  </Part>
))}    
      </div>
      
      <button onClick={onAssembleClick}className='bb1'>Assemble</button>
      <div>
      <DragAndDrop />
      </div>
      </div>
      
    </DndProvider>
  );
};

export default AssembleScreen;
