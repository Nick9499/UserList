import {
	ADD_NOTES,
	GET_INSTRUCTIONS,
	GET_NOTES,
	SINGLE_USER,
	USER_SUCCESS,
} from "../constants/userConstants"
import { contacts } from "../data"

export const listUsers = () => async (dispatch) => {
	dispatch({
		type: USER_SUCCESS,
		payload: contacts,
	})
}

export const singleUser = (id) => async (dispatch) => {
	const singleUser = contacts.find((user) => user.id.toString() === id)
	dispatch({
		type: SINGLE_USER,
		payload: singleUser,
	})
}

export const getNotes = (id) => async (dispatch) => {
	const singleUser = contacts.find((user) => user.id === id)

	dispatch({
		type: GET_NOTES,
		payload: singleUser.notes,
	})
}

export const addNotes = (id, value) => async (dispatch) => {
	const singleUser = contacts.find((user) => user.id === id)
	singleUser.notes.push({ p: value })
	dispatch({
		type: ADD_NOTES,
		payload: singleUser.notes,
	})
}

export const getInstructions = (id) => async (dispatch) => {
	const singleUser = contacts.find((user) => user.id === id)

	dispatch({
		type: GET_INSTRUCTIONS,
		payload: singleUser.instructions,
	})
}

export const addInstructions = (id, value) => async (dispatch) => {
	const singleUser = contacts.find((user) => user.id === id)
	singleUser.instructions.push({ p: value })
	dispatch({
		type: ADD_NOTES,
		payload: singleUser.instructions,
	})
}
