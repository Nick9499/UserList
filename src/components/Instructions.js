import React, { useState } from "react"
import { Button, Card, Form } from "react-bootstrap"
const Instructions = ({ instructions }) => {
	const [value, setValue] = useState("")
	const addHandler = (e) => {
		e.preventDefault()
		if (value.trim() !== "") {
			instructions.push({ p: value })
		}
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
