import
{
  GROUP_NOT_FOUND
} from '../actions/types';

export default function (state = {}, action) {
	switch (action.type) {
		case GROUP_NOT_FOUND:
			return { ...state, notFoundError: 'We could not find a group with that name. ' };
	}

	return state;
}
