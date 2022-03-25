import React from 'react';
import logo from '../../Image/logo.png'
import './Header.css'
const Header = () => {
    return (
<nav className=" navbar bg-dark navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <img width={"75px"}   src={logo} alt="" />
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className=" ms-5 navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active fs-5 " aria-current="page" href="/Home">Home</a>
            </li>
            <li className="nav-item fs-5">
            <a className="nav-link" href="/top">Catagories</a>
            </li>
            <li className="nav-item fs-5">
            <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item fs-5">
            <a className="nav-link" href="/Contact">Contact Us</a>
            </li>
            
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
    </div>
</nav>
    );
};

export default Header;