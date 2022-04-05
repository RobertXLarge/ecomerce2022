import AppBar from '@material-ui/core/AppBar/AppBar';
import InputBase from '@material-ui/core/InputBase/InputBase';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React, { useState } from 'react';
import logo from "../imagenes/hotellogo.png";
import SearchIcon from "@material-ui/icons/Search";
import Typography from '@material-ui/core/Typography/Typography';

const Header = () => {
  const [mobile, setMobile] = useState(false)
  const classes = useStyle()
  const displayMobile = () =>  {}
  const displayDesktop = () =>  {
    return(<Toolbar className={ classes.toolbar}>
      <img src={logo} className={classes.logo}/>
      <div className= {classes.center}>
        <InputBase fullWidth placeholder="Busque aqui..." inputProps= {{className: classes.input}}/>
        <SearchIcon/>
        </div>

        <div className={classes.right}>
          <Typography> Sign in </Typography>
          </div>
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
  },

  input: {
    padding: theme.spacing(1,5,1,5),
  },

  center: {
    display: "flex",
    allignItems: "center",
    border: "1px solid lightgray",
    borderRadius: "999px",
    minWidth: "300px",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  }

}))

export default Header;
