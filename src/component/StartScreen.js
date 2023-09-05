import React from 'react';

import './ImageScroll.css'; // Create a CSS file for styling
import image6 from './robbo.jpg';
import image1 from './robo1.jpeg';
import image2 from './robo2.jpg';
import image3 from './robo3.jpg';
import image4 from './robo4.jpg';
import image5 from './robo5.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const StartScreen = ({ onStartClick }) => {
  
  return (
    <div>
      <div className='image-scroll-container'>
      <Carousel>
                <div  >
                    <img src={image3}  alt='robo' />
                    
                </div>
                <div>
                  <img src={image1} alt='robo'/>
                
                </div>
                <div>
                    <img src={image2} alt='robo'/>
                   
                </div>
                <div>
                    <img src={image4} alt='robo'/>
                   
                </div>
                <div>
                    <img src={image5} alt='robo'/>
                   
                </div>
                <div>
                    <img src={image6} alt='robo'/>
                   
                </div>
            </Carousel>
        
    </div>
    <p>A robot is a programmable machine that can complete a task, while the term robotics describes the field of study focused on developing robots and automation. Each robot has a different level of autonomy. These levels range from human-controlled bots that carry out tasks to fully-autonomous bots that perform tasks without any external influences.</p>
      <button onClick={onStartClick} id='ff' >Start</button>
    </div>
  );
};

export default StartScreen;
