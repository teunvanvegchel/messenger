import notificationService from './NotificationService';

export const loadConversations = conversations => ({
  type: 'LOAD_CONVERSATIONS',
  conversations
});

export const openConversation = id => ({
  type: 'OPEN_CONVERSATION',
  id,
});

export const sendMessage = (message) => {
  notificationService.sendMessage(
    JSON.stringify({
      type: 'SEND_MESSAGE',
      content: message
    })
  );

  return {
    type: 'SEND_MESSAGE',
    content: message,
  };
};
