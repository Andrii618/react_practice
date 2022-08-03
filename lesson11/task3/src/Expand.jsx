import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import './expand.scss';

const Expand = ({ children, title, isVisible, onButtonClick }) => (
  <div className="expand border">
    <div className="expand__header">
      <span className="expand__title">{title}</span>
      <button className="expand__toggle-btn" onClick={onButtonClick}>
        {isVisible ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </button>
    </div>
    <div className="expand__content">{isVisible && children}</div>
  </div>
);

export default Expand;
