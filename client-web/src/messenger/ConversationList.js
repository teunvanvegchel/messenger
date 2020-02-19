import classnames from 'classnames';
import React from 'react';
import './ConversationList.css';

const getLastMessage = ({ messages = [] }) => {
  if (messages.length < 1) {
    return '';
  }

  return (
    <span className="conversation-list__item__preview">
      {messages[messages.length - 1].content}
    </span>
  )
}

const ConversationList = ({ conversations, selectedConversation }) => (
  <>
    <ul className="conversation-list">
      {conversations.map(conversation => (
        <li
          onClick={() => alert(1)}
          className={classnames({
            'conversation-list__item': true,
            'conversation-list__item-selected': selectedConversation === conversation
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
              {getLastMessage(conversation)}
              <span className="conversation-list__item__date">
                yesterday
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </>
)

export default ConversationList;
