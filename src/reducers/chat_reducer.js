import
{
  CHAT_LOADING,
  CHAT_LOADED,
  POST_MSG,
  POST_MSG_FAIL,
  POST_MSG_LOADING
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  groupChatInfo: {
    name: '',
    channels: [],
    selectedChannel: 'default'
  },
  chatInfo: {
    messages: []
  }
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
    case CHAT_LOADING:
      return { ...state, ...INITIAL_STATE, loading: true };
    case CHAT_LOADED: {
      const { groupChatInfo, chatInfo } = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        groupChatInfo,
        chatInfo
      };
    }
    case POST_MSG: {
      const { chatInfo } = state;
      const newMessages = [...chatInfo.messages, action.payload];
      const newChatInfo = { ...chatInfo, messages: newMessages };

      return { ...state, chatInfo: newChatInfo };
    }

		default:
      return state;

	}
}
