export const loadConversations = conversations => ({
  type: 'LOAD_CONVERSATIONS',
  conversations
});

export const openConversation = id => ({
  type: 'OPEN_CONVERSATION',
  id,
});

export const sendMessage = () => ({
  type: 'SEND_MESSAGE',
});
