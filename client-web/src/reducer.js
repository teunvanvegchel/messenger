const initialState = {
  notificationsState: 'DISCONNECTED',
  conversations: [],
  activeConversation: null,
};

export default (state = initialState, action) => {
  console.log('Action:', action);

  switch (action.type) {
    case 'LOAD_CONVERSATIONS':
      const activeConversation = state.activeConversation || action.conversations[0].id;
      return {
        ...state,
        conversations: action.conversations,
        activeConversation,
      };
    case 'OPEN_CONVERSATION':
      return {
        ...state,
        activeConversation: action.id,
      };
    case 'NOTIFICATIONS_CONNECTED':
      return {
        ...state,
        notificationsState: 'CONNECTED'
      };
    case 'NOTIFICATIONS_DISCONNECTED':
      return {
        ...state,
        notificationsState: 'DISCONNECTED'
      };
    case 'NOTIFICATIONS_CONNECTING':
      return {
        ...state,
        notificationsState: 'CONNECTING'
      }
    default:
      return state;
  }
};
