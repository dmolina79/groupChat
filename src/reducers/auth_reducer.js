import
{ AUTH_USER,
  SIGN_OUT_USER,
  AUTH_ERROR
} from '../actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case AUTH_USER:
			return { ...state, authenticated: true };
		case SIGN_OUT_USER:
			return { ...state, authenticated: false };
		case AUTH_ERROR:
			return { ...state, error: action.payload };
	
	}

	return state;
}
