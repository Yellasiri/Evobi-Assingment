import React from 'react';
import { useDrag } from 'react-dnd';

const Part = ({ id, name, image }) => {
  const [, ref] = useDrag({
    type: 'part',
    item: { id, name },
  });

  return (
    <div ref={ref} style={{ width: '100px', height: '100px', margin: '10px', display: 'inline-block' }}>
      <img src={image} alt={name} />
    </div>
  );
};

export default Part;
