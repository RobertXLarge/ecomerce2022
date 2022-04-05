import AppBar from '@material-ui/core/AppBar/AppBar';
import React, { useState } from 'react';

const Header = () => {
  const [mobile, setMobile] = useState(false)
  return (
    <AppBar>
      <h1>Encabezado</h1>
    </AppBar>
  );
};

export default Header;
