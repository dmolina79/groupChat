import
{
  CHAT_LOADING,
  CHAT_LOADED
} from '../actions/types';

const INITIAL_STATE = {
  loading: true,
  chatGroupInfo: {
    name: '',
    channels: []
  }
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
    case CHAT_LOADING:
      return { ...state, loading: true };
    case CHAT_LOADED: {
      const { chatGroupInfo } = action.payload;
      return { ...state, loading: false, chatGroupInfo };
    }
		default:
      return state;

	}
}
