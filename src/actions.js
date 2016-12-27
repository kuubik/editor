export const setCurrentColor = (color) => {
  return {
    type: 'SET_CURRENT_COLOR',
    payload: {
      color
    }
  };
};

export const addColorToPresets = () => {
  return {
    type: 'ADD_COLOR_TO_PRESETS'
  };
};

export const toggleSelection = (id) => {
  return {
    type: 'TOGGLE_SELECTION',
    payload: {
      id
    }
  };
};

export const setColors = () => {
  return {
    type: 'SET_COLORS'
  };
};

export const addFrame = () => {
  return {
    type: 'ADD_FRAME'
  };
};

export const setFrame = (id) => {
  return {
    type: 'SET_FRAME',
    payload: {
      id
    }
  };
};
