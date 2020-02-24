const initialState = {
  conversations: [],
  activeConversation: null,
};

export default (state = initialState, action) => {
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
    default:
      return state;
  }
};
