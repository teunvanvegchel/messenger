import React, { useState } from 'react';
import './MessageComposer.css';

const MessageComposer = ({ sendMessage }) => {
  const [content, setContent] = useState('');

  const onSubmit = event => {
    event.preventDefault();
    if (content.trim() !== '') {
      sendMessage(content);
      setContent('');
    }
  };

  return (
    <form className="message-composer">
      <input
        placeholder="Type a message..."
        value={content}
        onChange={event => setContent(event.target.value)}
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
}

export default MessageComposer;
