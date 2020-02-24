import React from 'react';
import { loadConversations } from './actions';
import Messenger from './messenger/Messenger';
import store from './store';

const conversations = [
  {
    id: '1',
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
    id: '2',
    title: 'Charlie'
  },
  {
    id: '3',
    title: 'Dave'
  }
];

store.dispatch(loadConversations(conversations));

const App = () => (
  <Messenger activeConversation={conversations[0]} />
);

export default App;
