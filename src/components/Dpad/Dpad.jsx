import React, { useState } from 'react';
import './DPad.css';

const DPad = ({ onDirectionPress, onStopPress }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonPress = (direction) => {
    setActiveButton(direction);
    
    if (direction === 'stop') {
      onStopPress && onStopPress();
    } else {
      onDirectionPress && onDirectionPress(direction);
    }
  };

  const handleButtonRelease = () => {
    setActiveButton(null);
  };

  return (
    <div className='dpad'>

        <h3>
            Vehicle Direction
        </h3>

        <div className="controller">
        
      <button 
        className={`button arrow-btn up ${activeButton === 'up' ? 'active' : ''}`}
        onMouseDown={() => handleButtonPress('up')}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
        onTouchStart={() => handleButtonPress('up')}
        onTouchEnd={handleButtonRelease}
      >
        <div className="arrow"></div>
      </button>
      
      <button 
        className={`button arrow-btn left ${activeButton === 'left' ? 'active' : ''}`}
        onMouseDown={() => handleButtonPress('left')}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
        onTouchStart={() => handleButtonPress('left')}
        onTouchEnd={handleButtonRelease}
      >
        <div className="arrow"></div>
      </button>
      
      <button 
        className={`button stop ${activeButton === 'stop' ? 'active' : ''}`}
        onMouseDown={() => handleButtonPress('stop')}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
        onTouchStart={() => handleButtonPress('stop')}
        onTouchEnd={handleButtonRelease}
      >
        STOP
      </button>
      
      <button 
        className={`button arrow-btn right ${activeButton === 'right' ? 'active' : ''}`}
        onMouseDown={() => handleButtonPress('right')}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
        onTouchStart={() => handleButtonPress('right')}
        onTouchEnd={handleButtonRelease}
      >
        <div className="arrow"></div>
      </button>
      
      <button 
        className={`button arrow-btn down ${activeButton === 'down' ? 'active' : ''}`}
        onMouseDown={() => handleButtonPress('down')}
        onMouseUp={handleButtonRelease}
        onMouseLeave={handleButtonRelease}
        onTouchStart={() => handleButtonPress('down')}
        onTouchEnd={handleButtonRelease}
      >
        <div className="arrow"></div>
      </button>
    </div>


    </div>

    
  );
};

export default DPad;