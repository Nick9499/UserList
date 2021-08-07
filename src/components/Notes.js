import React, { useState } from "react"
import { Button, Card, Form } from "react-bootstrap"

const Notes = ({ notes }) => {
	const [value, setValue] = useState("")
	const addHandler = (e) => {
		e.preventDefault()
		notes.push({ p: value })
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
