import React from 'react';
import Conversation from '../conversation/Conversation';
import ConversationList from './ConversationList';
import './Messenger.css';

const Messenger = ({conversations, activeConversation}) => (
  <div className="messenger">
    <div className="messenger__sidebar">
      <h1 className="messenger__sidebar__header">Chats</h1>
      <ConversationList conversations={conversations} selectedConversation={activeConversation} />
    </div>
    <div className="messenger__main">
      <Conversation title={activeConversation.title} messages={activeConversation.messages} />
    </div>
  </div>
);

export default Messenger;
