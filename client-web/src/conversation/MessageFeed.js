import React from 'react';
import Message, { MESSAGE_RECEIVED, MESSAGE_SENT } from './Message';
import './MessageFeed.css';

const getType = (author, receipient) =>
  author === receipient
    ? MESSAGE_SENT
    : MESSAGE_RECEIVED;

const MessageFeed = ({ messages = [], recipient }) => (
  <div className="message-feed">
    {
      messages.map(message => (
        <Message
          content={message.content}
          author={message.author}
          type={getType(message.author, recipient)}
        />
      ))
    }
  </div>
);

export default MessageFeed;
