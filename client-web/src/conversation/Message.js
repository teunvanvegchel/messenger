import React from 'react';
import './Message.css';

export const MESSAGE_SENT = 'sent';
export const MESSAGE_RECEIVED = 'received';

const Message = ({ content, type }) => (
  <div className={`Message Message--${type}`}>
    <p className="Message__content">
      {content}
    </p>
  </div>
);

export default Message;
