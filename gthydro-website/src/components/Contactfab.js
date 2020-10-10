import React from 'react';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import "./Contactfab.css";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { makeStyles } from "@material-ui/core/styles";




const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

function Contactfab() {
  const classes = useStyles();
    return (
        
      <div className={classes.root}>
      <Link to="/contact">
    <Fab color="secondary" aria-label="add" className={classes.margin}>
   <HelpOutlineIcon id="question-icon" />
 </Fab>
 </Link>
 </div>
       
    )
}

export default Fab
