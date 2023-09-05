import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Navbar({theme, toggleTheme}) {
  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <a className="navbar-brand" href="/">
        <img src={logo} alt="Logo" height='75rem' className="d-inline-block align-text-top" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li>
            <Link className="nav-link btn btn-primary" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link btn btn-primary" to="/new-entry">Create New Entry</Link>
          </li>
          <li>
            <Link className="nav-link btn btn-primary" to="/fetched-data">View Fetched Data</Link>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-secondary ml-auto" onClick={toggleTheme}>
              Switch to {theme === 'dark' ? 'Light' : 'Dark'} Theme
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
