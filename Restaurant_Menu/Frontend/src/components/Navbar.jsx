
import React, { useState } from 'react';
import styled from "styled-components";
import  { mobile }  from "../responsive";



const Container = styled.div`
  background-color: #010103;
  height: 60px;
  padding: 20px 7px;
  ${mobile({ 
    height: "50px",
    padding: "8px 2px",
    margin: "-1px 0px"
   })
  }`;

const Warapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const NavItem = styled.div`
  color: white;
`;

const NavLink = styled.a`
  color:white;
  text-decoration: none;
`;

function Navbar() {


  return (
    <Container>
        <Warapper>
          <NavItem><NavLink href='#Biryani' >Biryani</NavLink></NavItem>
          <NavItem><NavLink href='#Rice' >Rice</NavLink></NavItem>
          <NavItem><NavLink href='#Desserts'>Desserts</NavLink></NavItem>
          <NavItem><NavLink href='#Shakes' >Shakes</NavLink></NavItem>
        </Warapper>
    </Container>
  )
}

export default Navbar;