import
{ AUTH_USER,
  SIGN_OUT_USER,
  AUTH_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  authenticated: false,
  user: undefined,
  error: undefined
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, user: action.payload, authenticated: true };
		case SIGN_OUT_USER:
			return { ...state, ...INITIAL_STATE };
		case AUTH_ERROR:
      console.log('error payload: ', action.payload);
			return { ...state, ...INITIAL_STATE, error: action.payload.message };
    default:
      return state;
	}
}
