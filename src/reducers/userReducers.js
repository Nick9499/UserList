import {
	FIND_USER_BY,
	SINGLE_USER,
	USER_SUCCESS,
} from "../constants/userConstants"

export const userListReducer = (state = { users: [], user: {} }, action) => {
	switch (action.type) {
		case USER_SUCCESS:
			return { ...state, users: action.payload }
		case SINGLE_USER:
			return { ...state, user: action.payload }
		case FIND_USER_BY:
			return { ...state, users: action.payload }
		default:
			return state
	}
}
