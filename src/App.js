import React from 'react';
import styles from './App.module.css';

import {Cards, Charts, Countrypicker, Navbar, Footer} from './components'
//import covid from './images/coronavirus.png';
import {Typography} from '@material-ui/core';
import Healthcheck from './images/health-check.png';
import Heartbeat from './images/heart-beat.png';
import Pandemic from './images/pandemic.png';

import {fetchData} from './api';


class App extends React.Component{
state = {
    data:{},
    country:'',
  }

  async componentDidMount() {
    const fetcheddata = await fetchData();

   this.setState({data: fetcheddata});
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render(){
    const { data, country } = this.state;
  return (
    <div className={styles.container}>
        <Navbar/>
        <div>
        <img src={Pandemic} style={{width: "300px", height: "300px", display:"center", filter: "brightness(110%)", zIndex:"-1", position:"absolute"}} alt=""/>
        <Typography variant="h1"  color="primary" style={{marginTop: "5rem", textAlign: "center", color: " #3d3d29"}}>Covitrac </Typography>
        <Typography variant="body1"  color="primary" style={{color:"grey", textAlign: "center", marginBottom:"4em"}}>Tracking covid19 all over the world</Typography>
        </div>
        <Cards data ={data}/>
        <Countrypicker handleCountryChange={this.handleCountryChange} />
        <Charts data={data} country={country} />
        <Typography variant="h4"  color="primary" style={{marginTop: "5rem", textAlign: "center", color: "violet"}}>Take This Self-Assessment Test</Typography>
        <Typography variant="h5"  color="primary" style={{marginTop: "2rem", textAlign: "center", color: "pink"}}>To check your current health status</Typography>
        <img src={Healthcheck} style={{width: "70px", height: "70px"}} alt=""/>
        <Typography variant="h4"  color="primary" style={{marginTop: "5rem", textAlign: "center", color: "green"}}>Please follow the Covid Guidelines and Precautions. </Typography>
        <div >
        <img src={Heartbeat} style={{width: "300px", height: "300px", filter: "brightness(170%)", zIndex:"-1", position:"absolute"}} alt=""/>
         <div style={{fontSize:"25px", color:"#4d4d33", left:"100px"}}>
        <ul>
          <li>Wear mask.</li>
          <li>Mask should cover mouth and nose.</li>
          <li>Wash your hands often with soap.</li>
          <li>Use hand sanitiser.</li>
          <li>Keep social distancing. </li>
          <li>Stay at home.</li>
        </ul>
         </div>
         </div>
        <Footer/>
    </div>
  );
  }
}

export default App;
