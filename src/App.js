

import React, { useState } from 'react';
import StartScreen from './component/StartScreen';
import PuzzleScreen from './component/PuzzleScreen';
import AssembleScreen from './component/AssembleScreen';
import ResultScreen from './component/ResultScreen';
import Body from './component/Body.png';
import Head from './component/Head.png';
import LeftHand from './component/LeftHand.png';
import LeftLeg from './component/LeftLeg.png';
import RightHand from './component/RightHand.png';
import RightLeg from './component/RightLeg.png';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start'); // 'start', 'puzzle', 'assemble', 'result'
  const [selectedParts, setSelectedParts] = useState([]);
  const [assembledImage, setAssembledImage] = useState(null);

  const partsData = [
    { name: 'Body', image: Body },
    { name: 'Head', image: Head },
    { name: 'LeftHand', image: LeftHand },
    { name: 'LeftLeg', image: LeftLeg },
    { name: 'RightHand', image: RightHand },
    { name: 'RightLeg', image: RightLeg }
    
  ];

  const handleStartClick = () => {
    setCurrentScreen('puzzle');
  };

  const handlePartSelect = (index) => {
    if (!selectedParts.includes(index)) {
      setSelectedParts([...selectedParts, index]);
    }
  };

  const handleNextClick = () => {
   
    if (selectedParts.length >0) {
      setCurrentScreen('assemble');
    } else {
      alert('Please select all puzzle parts.');
    }
  };

  const handleAssembleClick = () => {
    // Implement your logic to assemble the parts into an image
    // and set it to the 'assembledImage' state.
    // For simplicity, we'll assume it's just a placeholder image.
    setAssembledImage('alma1.png');
    setCurrentScreen('result');
  };
  
  return (
    <div className="App">
      {currentScreen === 'start' && <StartScreen onStartClick={handleStartClick} />}
      {currentScreen === 'puzzle' && (
        <PuzzleScreen parts={partsData} onPartSelect={handlePartSelect} onNextClick={handleNextClick} />
      )}
      {currentScreen === 'assemble' && (
        <AssembleScreen parts={partsData} onAssembleClick={handleAssembleClick} />
      )}
      {currentScreen === 'result' && <ResultScreen assembledImage={assembledImage} />}
    </div>
  );
}

export default App; 
