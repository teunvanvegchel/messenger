import React from 'react';
import ConversationHeader from './ConversationHeader';
import MessageComposer from './MessageComposer';
import MessageFeed from './MessageFeed';

const sendMessage = () => {
  alert(1)
}

const Conversation = ({ title, messages = [] }) => (
  <div className="Conversation">
    <div className="Conversation__box  Conversation__box--header">
      <ConversationHeader title={title} />
    </div>
    <div className="Conversation__box Conversation__box--content">
    <MessageFeed messages={messages} recipient='bob' />
    </div>
    <div className="Conversation__box Conversation__box--footer">
    <MessageComposer onSubmit={sendMessage} />
    </div>
  </div>
);

export default Conversation;
