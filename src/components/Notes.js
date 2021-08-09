import React, { useState } from "react"
import { useEffect } from "react"

import { Button, Card, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addNotes, getNotes } from "../actions/userAction"
/* import { addNotes } from "../actions/userAction" */

const Notes = () => {
	const [value, setValue] = useState("")
	const dispatch = useDispatch()
	const userList = useSelector((state) => state.userList)
	const { user, notes } = userList

	useEffect(() => {
		dispatch(getNotes(user.id))
		setValue("")
	}, [dispatch, user.id])

	const addHandler = (e) => {
		e.preventDefault()
		dispatch(addNotes(user.id, value))
	}

	return (
		<div>
			{notes.map((note, index) => (
				<Card key={index} className='mb-2'>
					<Card.Body>{note.p}</Card.Body>
				</Card>
			))}
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Add Notes</Form.Label>
					<Form.Control
						placeholder='Enter Notes'
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
				</Form.Group>
				<Button onClick={addHandler} variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default Notes
