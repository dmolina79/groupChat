import
{
  GROUP_NOT_FOUND,
  GROUP_FOUND
} from '../actions/types';

const INITIAL_STATE = {
  notFoundError: undefined
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case GROUP_NOT_FOUND:
			return { ...state, notFoundError: 'We could not find a group with that name. ' };
    case GROUP_FOUND:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
	}
}
