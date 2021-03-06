import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Navbar =() =>
{
  return (<NavbarContainer>
    <nav className="navbar navbar-expand-lg navbar-light px-5 py-0">
  <Link className="navbar-brand" to="/add-article"></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/articles">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/add-article"> Add Article</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/"> Logout </Link>
      </li>
    </ul>
  </div>
</nav></NavbarContainer>

  );
};

export default Navbar;

const NavbarContainer = styled.div`
.navbar {background : #03c4a1;}
.nav-link{  color : #fff !important;
&:hover{
background : var(--light-green);


}}
`;
