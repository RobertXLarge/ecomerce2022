import AppBar from '@material-ui/core/AppBar/AppBar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React, { useState } from 'react';

const Header = () => {
  const [mobile, setMobile] = useState(false)
  const classes = useStyle()
  const displayMobile = () =>  {}
  const displayDesktop = () =>  {
    <Toolbar className={ classes.toolbar}>
      <img src={}/>
      </Toolbar>
  }
  
  return (
    <AppBar>
      {
        mobile ? displayMobile() : displayDesktop()
      }
    </AppBar>
  );
};

const useStyle = makeStyles ((theme)=>({
  toolbar: {}
}))

export default Header;
