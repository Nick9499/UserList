import { SINGLE_USER, USER_SUCCESS } from "../constants/userConstants"
import { contacts } from "../data"

export const listUsers = () => async (dispatch) => {
	dispatch({
		type: USER_SUCCESS,
		payload: contacts,
	})
}

export const singleUser = (id) => (dispatch) => {
	const singleUser = contacts.find((user) => user.id.toString() === id)
	dispatch({
		type: SINGLE_USER,
		payload: singleUser,
	})
}
