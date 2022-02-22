import React from 'react';
import './style.css'
function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="nav navbar">
      <div className="nav-wrapper">
        
        <li>
        <a
          href="#Home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >Home </a>
      </li>

      <li>        
          <a
          href="#Skills"
          onClick={() => handlePageChange('Skills')}
        className={currentPage === 'Skills' ? 'nav-link active' : 'nav-link'}
        >
          Skills 
        </a>
      </li>
      
      <li>        
          <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio 
        </a>
      </li>
      <li>
          <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact 
        </a>
      </li>
      </div>
      
    </nav>
  );
}

export default Nav;
