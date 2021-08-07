import { USER_SUCCESS } from "../constants/userConstants"

export const userListReducer = (state = { users: [], user: {} }, action) => {
	switch (action.type) {
		case USER_SUCCESS:
			return { ...state, users: action.payload }
		case "SINGLE_USER":
			return { ...state, user: action.payload }

		default:
			return state
	}
}
