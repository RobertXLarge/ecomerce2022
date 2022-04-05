import AppBar from '@material-ui/core/AppBar/AppBar';
import InputBase from '@material-ui/core/InputBase/InputBase';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React, { useState } from 'react';
import logo from "../imagenes/hotellogo.png"
import SearchIcon from "@material-ui/icons/Search"

const Header = () => {
  const [mobile, setMobile] = useState(false)
  const classes = useStyle()
  const displayMobile = () =>  {}
  const displayDesktop = () =>  {
    return(<Toolbar className={ classes.toolbar}>
      <img src={logo} className={classes.logo}/>
      <InputBase fullWidth placeholder="Busque aqui..."/>
      <SearchIcon/>
      </Toolbar>)
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
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    allignItems: "center",

  },

  logo: {
    height: "30px",
    margin: theme.spacing(1,0,0,2),
    objectFit: "contain",
  }

}))

export default Header;
