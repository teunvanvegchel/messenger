import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';
import './Conversation.css';
import ConversationHeader from './ConversationHeader';
import MessageComposer from './MessageComposer';
import MessageFeed from './MessageFeed';

const Conversation = () => {
  const conversation = useSelector(state =>
    state.conversations.find(conversation =>
      conversation.id == state.activeConversation));
  const dispatch = useDispatch()

  return (
    <div className="conversation">
      <div className="conversation__box  conversation__box--header">
        <ConversationHeader title={conversation.title} />
      </div>
      <div className="conversation__box conversation__box--content">
        <MessageFeed messages={conversation.messages} recipient='bob' />
      </div>
      <div className="conversation__box conversation__box--footer">
        <MessageComposer sendMessage={(content) => dispatch(actions.sendMessage(content))} />
      </div>
    </div>
  );
}

export default Conversation;
