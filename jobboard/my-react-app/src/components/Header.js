import React from 'react';
import Logoimage from '../logo.svg';

const Header = ({ visible, onToggleForm }) => {
  const classString = visible ? "post-job-link" : "post-job-link";

  return (
    <div className="header">
      <div className="container">
        <img src={Logoimage} className="logo" alt="logo" />
        <button className={classString} onClick={onToggleForm}>Post Job</button>
      </div>
    </div>
  );
};

export default Header;
