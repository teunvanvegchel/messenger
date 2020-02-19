import React from 'react';
import './Conversation.css';
import ConversationHeader from './ConversationHeader';
import MessageComposer from './MessageComposer';
import MessageFeed from './MessageFeed';

const sendMessage = () => {
  alert(1)
}

const Conversation = ({ title, messages = [] }) => (
  <div className="conversation">
    <div className="conversation__box  conversation__box--header">
      <ConversationHeader title={title} />
    </div>
    <div className="conversation__box conversation__box--content">
    <MessageFeed messages={messages} recipient='bob' />
    </div>
    <div className="conversation__box conversation__box--footer">
    <MessageComposer onSubmit={sendMessage} />
    </div>
  </div>
);

export default Conversation;
