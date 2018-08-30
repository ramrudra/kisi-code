import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img src="https://global-uploads.webflow.com/5a06fcae4056cc00011eebfc/5a6ef2c37123420001cb1322_kisi.svg" alt="react-redux-boilerplate - Logo" />
        </Link>
      </div>
    );
  }
}

export default Header;
