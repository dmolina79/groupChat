import
{
  CHAT_LOADING,
  CHAT_LOADED
} from '../actions/types';

const INITIAL_STATE = {
  loading: true
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
    case CHAT_LOADING:
      return { ...state, loading: true };
    case CHAT_LOADED:
        console.log(action.payload);
        return { ...state, loading: false };
		default:
      return state;

	}
}
