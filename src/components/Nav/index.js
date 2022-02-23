import React from 'react';
import './style.css'
function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        
        <li>
        <a
          href="#About"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >About me </a>
      </li>

      <li>        
          <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
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
