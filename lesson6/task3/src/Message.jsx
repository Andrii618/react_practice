import React from 'react';

import './message.scss';

const Message = ({ text }) => {
  if (!text) {
    return null;
  }

  return <div className="message">{text}</div>;
};

export default Message;
