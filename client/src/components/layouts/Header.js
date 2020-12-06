import React from 'react';
import styled from 'styled-components';
const Header =() =>
{
  return (
    <MainContainer><h1>Welcome to the Travel Forum</h1></MainContainer>
  );
};
export default Header;
const MainContainer = styled.header`
background:url(../../images/header-img_2.jpg)  center / cover ; height:25rem; h1{transform: tarnslate(-50%, -50%);color:#fff; font-weight:900; position: absolute; top:25%; left:20%;}`;
