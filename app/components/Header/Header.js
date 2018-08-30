import React from 'react';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="https://www.getkisi.com/" target="_blank">
          <img src="https://global-uploads.webflow.com/5a06fcae4056cc00011eebfc/5a6ef2c37123420001cb1322_kisi.svg" alt="react-redux-boilerplate - Logo" />
        </a>
      </div>
    );
  }
}

export default Header;
