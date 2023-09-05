import React, { useState } from 'react';
import './a.css';

const DragAndDrop = () => {
  const [dragging, setDragging] = useState(false);
  const [droppedFiles, setDroppedFiles] = useState([]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);

    // Filter to only accept image files (you can modify the condition)
    const imageFiles = files.filter((file) => file.type.startsWith('image/'));

    setDroppedFiles(imageFiles);
  };

  return (
    <div id='abb'
      className={`drop-zone ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {dragging ? <p>Drop the image files here</p> : <p>Drag and drop image files here</p>}
      {droppedFiles.length > 0 && (
        <div className="preview">
          {droppedFiles.map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt={file.name} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
