import React from 'react';
import './MessageComposer.css';

const MessageComposer = ({ onSubmit }) => (
  <form className="message-composer">
    <input
      placeholder="Type a message..."
      className="message-composer__input"
    />
    <button
      type="submit"
      onClick={onSubmit}
      className="message-composer__button"
    >
      Send
    </button>
  </form>
);

export default MessageComposer;
