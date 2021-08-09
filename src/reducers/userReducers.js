import {
	ADD_NOTES,
	GET_NOTES,
	SINGLE_USER,
	USER_SUCCESS,
} from "../constants/userConstants"

export const userListReducer = (
	state = { users: [], user: {}, notes: [] },
	action
) => {
	switch (action.type) {
		case USER_SUCCESS:
			return { ...state, users: action.payload }
		case SINGLE_USER:
			return { ...state, user: action.payload }
		case GET_NOTES:
			return { ...state, notes: action.payload }
		case ADD_NOTES:
			return { ...state, ...state.notes, notes: action.payload }

		default:
			return state
	}
}
