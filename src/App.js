import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import _ from 'underscore';
import Layer from './components/Layer';
import ColorPalette from './components/ColorPalette';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndexes: [],
      colors: [],
      currentColor: '#a4c639',
      presetColors: [],
      currentFrame: 0
    };
  }

  handleClick(index) {
    if(_.contains(this.state.selectedIndexes, index)) {
      this.setState({
        selectedIndexes: _.without(this.state.selectedIndexes, index)
      });
    } else {
      this.setState({
        selectedIndexes: [
          ...this.state.selectedIndexes,
          index
        ]
      });
    }
  }

  handleSetColor() {
    //TODO: Limit presetColors to some amount.
    if(!_.contains(this.state.presetColors, this.state.currentColor)) {
      this.setState({
        presetColors: [
          ...this.state.presetColors,
          this.state.currentColor
        ]
      });
    }

    if(this.state.selectedIndexes.length === 0) {
      return;
    }

    let that = this;
    let colors = [];

    _.each(this.state.colors, function(element, index) {
      colors[index] = element;
    });

    _.each(this.state.selectedIndexes, function(id) {
      colors[id] = that.state.currentColor;
    });

    this.setState({
      colors: colors,
      selectedIndexes: []
    });
  }

  handleChangeColor(color) {
    this.setState({
      currentColor: color.hex
    });
  }

  handleFrameChange = (event, index, value) => {
    this.setState({
      currentFrame: value
    });
  }

  render() {
    return (
      <div>
        <AppBar
          style={{
            position: 'fixed'
          }}
          title="Kuubik"
        />
        <div className="container">
          <ColorPalette
            presetColors={this.state.presetColors}
            color={this.state.currentColor}
            onColorChange={(color) => this.handleChangeColor(color)}
            onColorSet={() => this.handleSetColor()}
          />
          <SelectField
            floatingLabelText="Current frame"
            onChange={this.handleFrameChange}
            value={this.state.currentFrame}>
            <MenuItem value={0} primaryText="Frame 1" />
            <MenuItem value={1} primaryText="Frame 2" />
            <Divider />
            <MenuItem value={2001} primaryText="Create frame" />
            <MenuItem value={2002} primaryText="Duplicate frame" />
          </SelectField>
          <Layer
            colors={this.state.colors}
            selectedIndexes={this.state.selectedIndexes}
            cols={5}
            rows={5}
            layers={5}
            onClick={(index) => this.handleClick(index)}/>
        </div>
      </div>
    );
  }
}

export default App;
