import React from 'react';
import Messenger from './messenger/Messenger';

const conversations = [
  {
    title: 'Alice',
    messages: [
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
    ]
  },
  {
    title: 'Charlie'
  },
  {
    title: 'Dave'
  }
];

const App = () => (
  <Messenger conversations={conversations} activeConversation={conversations[0]}  />
);

export default App;
