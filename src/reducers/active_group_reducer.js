import
{
  CHAT_LOADING,
	CHAT_INFO_LOADED,
  POST_MSG,
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  groupChatInfo: {
    name: '',
    channels: [],
    groupies: [],
    selectedChannel: 'default'
  }
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
    case CHAT_LOADING:
      return { ...state, ...INITIAL_STATE, loading: true };
    case CHAT_INFO_LOADED: {
      const { groupChatInfo } = action.payload;
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false,
        groupChatInfo
      };
    }
		default:
      return state;

	}
}
