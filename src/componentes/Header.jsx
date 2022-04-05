import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React, { useState } from 'react';

const Header = () => {
  const [mobile, setMobile] = useState(false)

  const displayMobile = () =>  {}
  const displayDesktop = () =>  {
    <Toolbar>
      
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

export default Header;
