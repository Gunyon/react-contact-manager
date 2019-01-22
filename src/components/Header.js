import React from 'react';
import PropTypes from 'prop-types';

function Header({ branding }) {
  return (
    <nav className="navbar navbar-expant-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  branding: PropTypes.string
};

Header.defaultProps = {
  branding: 'My app'
};

export default Header;