import React from 'react';
import './MessageComposer.css';

const MessageComposer = ({ onSubmit }) => (
  <form className="MessageComposer">
    <input
      placeholder="Type a message..."
      className="MessageComposer__input"
    />
    <button
      type="submit"
      onClick={onSubmit}
      className="MessageComposer__button"
    >
      Send
    </button>
  </form>
);

export default MessageComposer;
