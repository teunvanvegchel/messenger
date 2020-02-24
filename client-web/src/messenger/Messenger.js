import React from 'react';
import Conversation from '../conversation/Conversation';
import ConversationList from './ConversationList';
import './Messenger.css';

const Messenger = () => (
  <div className="messenger">
    <div className="messenger__sidebar">
      <h1 className="messenger__sidebar__header">Chats</h1>
      <ConversationList />
    </div>
    <div className="messenger__main">
      <Conversation />
    </div>
  </div>
);

export default Messenger;
