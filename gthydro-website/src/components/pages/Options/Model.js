import React from 'react'
import "./Model.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import gtdoc from "../HowWorks/GTDOC.pdf"
const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});


const SIZES = ["model--large", 'model--medium', 'model--small'];
export const Model = ({ Size, name, dimensions, description, homes, children}) => {

    const checkModelSize = SIZES.includes(Size) ? Size : SIZES[0];
    const classes = useStyles();
    const gtdocPage = `${gtdoc}#page=19`;
    return (
        <>

        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia >
            <div className="bkg--model">
        <svg className={checkModelSize} width="340" height="319" viewBox="0 0 540 519" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M67.9523 267.789C75.3017 258.978 85.9174 254.5 98.4453 254.5L271.662 254.5C271.663 254.5 271.663 254.5 271.663 266C271.663 277.5 271.663 277.5 271.662 277.5L98.4453 277.5C91.7202 277.5 87.9804 279.685 85.6143 282.521C82.9438 285.723 80.8274 291.23 80.5342 299.663C79.9446 316.625 86.9588 340.968 102.099 366.299C132.241 416.73 191.421 465.989 271.444 464.465C351.614 462.939 406.509 413.657 432.587 364.385C445.71 339.591 450.895 315.972 449.183 299.542C448.335 291.391 445.9 285.909 442.913 282.618C440.183 279.611 436.175 277.5 429.687 277.5H271.664C271.664 277.5 271.663 277.5 271.663 266C271.663 254.5 271.664 254.5 271.664 254.5L429.687 254.5C441.952 254.5 452.399 258.849 459.943 267.159C467.229 275.186 470.885 285.879 472.06 297.159C474.396 319.589 467.36 347.852 452.916 375.144C423.861 430.041 362.238 485.741 271.882 487.461C181.38 489.184 115.446 433.462 82.3566 378.099C65.8817 350.534 56.7516 321.777 57.5481 298.864C57.948 287.359 60.9072 276.234 67.9523 267.789Z" fill="#9C9B9B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M462.048 264.211C454.698 273.022 444.083 277.5 431.555 277.5H258.338C258.337 277.5 258.337 277.5 258.337 266C258.337 254.5 258.337 254.5 258.338 254.5H431.555C438.28 254.5 442.02 252.315 444.386 249.479C447.056 246.277 449.173 240.77 449.466 232.337C450.055 215.375 443.041 191.032 427.901 165.701C397.759 115.27 338.579 66.011 258.556 67.5346C178.386 69.061 123.491 118.343 97.4127 167.615C84.2905 192.409 79.1053 216.028 80.8166 232.458C81.6655 240.609 84.1002 246.091 87.0874 249.382C89.8169 252.389 93.8252 254.5 100.313 254.5H258.336C258.336 254.5 258.337 254.5 258.337 266C258.337 277.5 258.336 277.5 258.336 277.5H100.313C88.0477 277.5 77.6006 273.151 70.0571 264.841C62.7713 256.814 59.1153 246.121 57.9404 234.841C55.6043 212.411 62.6398 184.148 77.0843 156.856C106.139 101.959 167.762 46.2592 258.118 44.5388C348.62 42.8156 414.554 98.5383 447.643 153.901C464.118 181.466 473.248 210.223 472.452 233.136C472.052 244.641 469.093 255.766 462.048 264.211Z" fill="#BBB9B9"/>
    <circle cx="262.306" cy="261.306" r="47" transform="rotate(49 262.306 261.306)" fill="#A5A5A5"/>
    <path d="M226.145 277.415C215.822 253.563 226.781 225.784 250.622 215.37C274.464 204.955 302.16 215.848 312.483 239.7C322.806 263.552 311.847 291.33 288.006 301.745C264.164 312.16 236.468 301.266 226.145 277.415Z" fill="#C4C4C4"/>
    <path d="M146.647 333.064L144.106 328.753L228.043 279.628L230.584 283.939L146.647 333.064Z" fill="#C4C4C4"/>
    <path d="M160.494 373.068L123.683 308.78L202.605 286.427L213.931 306.396L160.494 373.068Z" fill="#AAA9A9"/>
    <path d="M158.609 369.456L118.873 305.411L200.9 282.086L212.046 302.785L158.609 369.456Z" fill="#C4C4C4"/>
    <path d="M144.1 191.638L146.563 187.282L231.075 235.411L228.611 239.768L144.1 191.638Z" fill="#C4C4C4"/>
    <path d="M116.379 223.632L153.648 159.609L212.468 216.781L200.836 236.574L116.379 223.632Z" fill="#AAA9A9"/>
    <path d="M118.564 220.194L154.161 153.759L215.374 213.133L203.021 233.136L118.564 220.194Z" fill="#C4C4C4"/>
    <path d="M266.132 115.241L271.137 115.196L271.711 212.45L266.707 212.495L266.132 115.241Z" fill="#C4C4C4"/>
    <path d="M224.565 107.231L298.645 107.495L278.542 187.021L255.585 186.844L224.565 107.231Z" fill="#AAA9A9"/>
    <path d="M228.635 107.404L303.968 105.015L283.154 187.714L259.656 187.017L228.635 107.404Z" fill="#C4C4C4"/>
    <path d="M271.957 402.005L266.953 402.05L266.378 304.796L271.383 304.751L271.957 402.005Z" fill="#C4C4C4"/>
    <path d="M313.525 410.015L239.445 409.751L259.547 330.226L282.504 330.402L313.525 410.015Z" fill="#AAA9A9"/>
    <path d="M309.455 409.842L234.122 412.232L254.935 329.532L278.434 330.229L309.455 409.842Z" fill="#C4C4C4"/>
    <path d="M394.491 329.476L392.028 333.832L307.517 285.703L309.98 281.346L394.491 329.476Z" fill="#C4C4C4"/>
    <path d="M422.212 297.482L384.943 361.505L326.124 304.333L337.755 284.54L422.212 297.482Z" fill="#AAA9A9"/>
    <path d="M420.027 300.92L384.43 367.355L323.217 307.981L335.57 287.978L420.027 300.92Z" fill="#C4C4C4"/>
    <path d="M392.39 184.983L394.932 189.294L310.995 238.419L308.454 234.108L392.39 184.983Z" fill="#C4C4C4"/>
    <path d="M375.913 146.498L412.725 210.786L333.802 233.139L322.476 213.169L375.913 146.498Z" fill="#AAA9A9"/>
    <path d="M377.799 150.109L417.534 214.155L335.508 237.48L324.362 216.781L377.799 150.109Z" fill="#C4C4C4"/>
    </svg>
    </div> 
        </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h1">
            {name}
          </Typography>
          <Typography  color="textSecondary" component="h4">
            {dimensions}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2"  component="h3">
            {homes}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary"> 
        <Link className="doclink" to={gtdocPage} target="_blank">
          Learn More
          </Link>
        </Button>
      </CardActions>
    </Card>

        
        


        </>
    )
}


