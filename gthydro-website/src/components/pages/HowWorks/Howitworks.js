
import { Link } from 'react-router-dom';
import React from 'react';
import gtdoc from "./GTDOC.pdf";
import "./Howitworks.css";
import Fab from '@material-ui/core/Fab';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { makeStyles } from "@material-ui/core/styles";
import Intro from '../Introstory/Intro';


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));


function Howitworks() {
  const toTop = () =>{
    window.scrollTo(0,0);
  }
  const classes = useStyles();
    return (
      

      <>
      
             <div className="container" onLoad={toTop}>
             <h1 id="prompt">Read more about it and let us know what you think. </h1>
             <Intro/>
             <Link className="doclink" to={gtdoc} target="_blank">
             <div id="mydoc">
             Click Here For Extended Reading
             </div>
             </Link>

             <div id="question-prompt">
               <div className={classes.root}>
                 <Link to="/contact">
               <Fab color="secondary" aria-label="add" className={classes.margin}>
              <HelpOutlineIcon id="question-icon" />
            </Fab>
            </Link>
            </div>
             </div>
            

                </div>
             </>

    )
}

export default Howitworks
