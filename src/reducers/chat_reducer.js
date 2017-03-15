import
{
  CHAT_LOADING,
  CHAT_LOADED
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  groupChatInfo: {
    name: '',
    channels: []
  }
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
    case CHAT_LOADING:
      return { ...state, loading: true };
    case CHAT_LOADED: {
      const { groupChatInfo } = action.payload;
      return { ...state, loading: false, groupChatInfo };
    }
		default:
      return state;

	}
}
