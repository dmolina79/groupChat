import
{
	CHAT_MSGS_LOADED,
  POST_MSG,
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  chatInfo: {
    messages: []
  }
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
    // case CHAT_LOADING:
    //   return { ...state, ...INITIAL_STATE, loading: true };
    case CHAT_MSGS_LOADED: {
      const { chatInfo } = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        chatInfo
      };
    }
    // case POST_MSG: {
    //   const { chatInfo } = state;
    //   const newMessages = [...chatInfo.messages, action.payload];
    //   const newChatInfo = { ...chatInfo, messages: newMessages };
    //
    //   return { ...state, chatInfo: newChatInfo };
    // }

		default:
      return state;

	}
}
