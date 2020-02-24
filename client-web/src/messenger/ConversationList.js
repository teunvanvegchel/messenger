import classnames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';
import './ConversationList.css';

const ConversationList = () => {
  const conversations = useSelector(state => state.conversations);
  const activeConversation = useSelector(state => state.activeConversation);
  const dispatch = useDispatch()

  return (
    <ul className="conversation-list">
      {conversations.map(conversation => (
        <li
          onClick={() => dispatch(actions.openConversation(conversation.id))}
          className={classnames({
            'conversation-list__item': true,
            'conversation-list__item-selected': activeConversation === conversation.id
          })}
        >
          <span className="conversation-list__item__avatar">
            {conversation.title.substring(0, 1)}
          </span>
          <div className="conversation-list__item__content">
            <div className="conversation-list__item__title">
              {conversation.title}
            </div>
            <div className="conversation-list__item__details">
              {conversation.messages && (
                <>
                  <span className="conversation-list__item__preview">
                    {conversation.messages[conversation.messages.length - 1].content}
                  </span>
                  <span className="conversation-list__item__date">
                    yesterday
                </span>
                </>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ConversationList;
