import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionBuild from 'material-ui/svg-icons/action/build';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { blue500, red500, green500 } from 'material-ui/styles/colors';

const EditorDrawer = ({open, onRequestChange}) => (
  <Drawer
    docked={false}
    open={open}
    onRequestChange={onRequestChange}
  >
    <MenuItem
      primaryText="Home"
      leftIcon={<ActionHome color={blue500} />}
      onTouchTap={() => onRequestChange(false)}
    />
    <MenuItem
      primaryText="Editor"
      leftIcon={<ActionBuild color={red500} />}
      onTouchTap={() => onRequestChange(false)}
    />
    <MenuItem
      primaryText="About"
      leftIcon={<ActionInfo color={green500} />}
      onTouchTap={() => onRequestChange(false)}
    />
  </Drawer>
);

export default EditorDrawer;
