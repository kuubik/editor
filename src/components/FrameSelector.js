import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const FrameSelector = ({currentFrame, frameCount, onChange}) => {
  let frames = [];

  for (let i = 0; i < frameCount; i++) {
    frames.push(
      <MenuItem key={i} value={i} primaryText={"Frame " + (i + 1)} />
    );
  }

  return (
    <SelectField
      floatingLabelText="Current frame"
      onChange={(event, index, value) => onChange(value)}
      value={currentFrame}>
      {frames}
      <Divider />
      <MenuItem value={-1} primaryText="Create frame" />
      <MenuItem value={-2} primaryText="Duplicate frame" />
    </SelectField>
  )
};
FrameSelector.propTypes = {
  currentFrame: React.PropTypes.number.isRequired,
  frameCount: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func
};

export default FrameSelector;
