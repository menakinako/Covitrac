import React from 'react'
import {BottomNavigation, BottomNavigationAction, Typography} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';





const Footer = () => {
    return (
    <div  style={{marginTop: "7rem"}}>
      <Typography variant="h5"  color="primary" style={{marginBottom: "1rem", textAlign: "center", color: "orange"}}>Covitrac</Typography>
      <Typography variant="subtitle1"  color="primary" style={{color:"grey", textAlign: "center", wordSpacing:"3px"}}>We  stand  united  fighting  on  the  battlefield</Typography>
        <BottomNavigation >
        <BottomNavigationAction color="black" label="Github" value="recents" icon={<GitHubIcon  style={{fill: "#00000"}}/>} />
        <BottomNavigationAction color="red" label="Facebook" value="recents" icon={<FacebookIcon  style={{fill: "#3b5998"}}/>} />
        <BottomNavigationAction label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
        <BottomNavigationAction label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
        </BottomNavigation>
    </div>
    )
}

  export default Footer;