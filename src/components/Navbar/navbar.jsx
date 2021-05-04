import React from 'react';
import styled from 'styled-components';
import Burger from './burger';
import covid from '../../images/coronavirus.png';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  background-color: #000000;
  color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    color: #fff;
    padding: 15px 0;
    font-size: 35px;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img src={covid} style={{width: "30px", height: "30px"}} alt=""/>
       Covitrac
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar