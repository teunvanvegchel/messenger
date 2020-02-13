import React from 'react';
import Conversation from './conversation/Conversation';
import './conversation/Conversation.css';

const messages = [
  {
    author: 'alice',
    content: 'Hi!',
  },
  {
    author: 'alice',
    content: 'Whats up?',
  },
  {
    author: 'bob',
    content: 'Hey!'
  },
];

const App = () => (
  <Conversation title="Alice" messages={messages} />
);

export default App;
