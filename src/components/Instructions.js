import React, { useEffect, useState } from "react"
import { Button, Card, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addInstructions, getInstructions } from "../actions/userAction"

const Instructions = () => {
	const [value, setValue] = useState("")
	const dispatch = useDispatch()
	const userList = useSelector((state) => state.userList)
	const { user, instructions } = userList

	useEffect(() => {
		dispatch(getInstructions(user.id))
		setValue("")
	}, [dispatch, user.id])

	const addHandler = (e) => {
		e.preventDefault()
		dispatch(addInstructions(user.id, value))
	}

	return (
		<div>
			{instructions.map((instruction, index) => (
				<Card key={index} className='mb-2'>
					<Card.Body>{instruction.p}</Card.Body>
				</Card>
			))}
			<Form>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Add Instructions</Form.Label>
					<Form.Control
						placeholder='Enter Instructions'
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

export default Instructions
