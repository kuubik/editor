import React from 'react';
import LED from '../LED';

const LEDGrid = ({rows, cols, layers, defaultColor, onClick}) => {
  const handleClick = (index) => {
    if(onClick) {
      onClick(index);
    }
  }

  let leds = [];

  for (let i = 0; i < cols * rows * layers; i++) {
    if(i % (cols * rows) === 0) {
      let layerNum = i / (cols * rows);
      leds.push(<h3 key={"layer-" + layerNum}>Layer {layerNum + 1}</h3>);
    }

    if(i % cols === 0 && i !== 0) {
      let separatorNum = i / cols;
      leds.push(<div key={"separator-" + (separatorNum - 1)} style={{
        height: 8
      }}></div>);
    }
    leds.push(<LED key={i} index={i} color={defaultColor} onClick={(index) => handleClick(index)} />);
  }

  return (
    <div>
      {leds}
    </div>
  );
};

export default LEDGrid;
