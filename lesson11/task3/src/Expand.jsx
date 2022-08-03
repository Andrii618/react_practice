import React from 'react';

import './expand.scss';

const Expand = ({ children, title, isVisible, onButtonClick }) => (
  <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{title}</span>
      <button className="expand__toggle-btn" onClick={onButtonClick}>
        {isVisible ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </button>
    </div>
    {isVisible && <div className="expand__content">{children}</div>}
  </div>
);

export default Expand;
