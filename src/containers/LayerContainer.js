import { connect } from 'react-redux';
import Layer from '../components/Layer';
import { toggleSelection, selectLayer } from '../actions';

const mapStateToProps = (state) => {
  return {
    colors: state.colors.filter(color => {
      return color.frame === state.currentFrame
    }),
    currentFrame: state.currentFrame,
    selectedIndexes: state.selectedIndexes,
    cols: 5,
    rows: 5,
    layers: 5
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(toggleSelection(id));
    },
    onSelectAllClick: (id) => {
      dispatch(selectLayer(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layer);
