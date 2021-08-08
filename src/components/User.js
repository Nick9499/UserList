import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Col, Image, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import { useParams } from "react-router-dom"
import { singleUser } from "../actions/userAction"
import Analysis from "./Analysis"
import Instructions from "./Instructions"
import Notes from "./Notes"

const User = () => {
	let { id } = useParams()
	const [notes, setNotes] = useState(true)
	const [instructions, setInstructions] = useState(false)
	const [analysis, setAnalysis] = useState(false)
	const dispatch = useDispatch()
	const userList = useSelector((state) => state.userList)
	const { user } = userList

	useEffect(() => {
		dispatch(singleUser(id))
	}, [dispatch, id])

	const handleClick = (value) => {
		if (value === notes) {
			setNotes(true)
			setInstructions(false)
			setAnalysis(false)
		} else if (value === instructions) {
			setNotes(false)
			setInstructions(true)
			setAnalysis(false)
		} else if (value === analysis) {
			setNotes(false)
			setInstructions(false)
			setAnalysis(true)
		}
	}

	return user ? (
		<div className='m-5'>
			<Row className='m-10'>
				<Col xs={12} md={6}>
					<Image
						src={user.url}
						fluid
						thumbnail
						style={{ width: "20%", marginBottom: "3%" }}
					/>
					<h4>{user.name}</h4>
					<p>
						<span className='font-weight-bold'>Email:</span> {user.email}
					</p>
					<p>
						<span className='font-weight-bold'>Phone:</span> {user.phone}
					</p>
					<p>
						<span className='font-weight-bold'>City:</span> {user.city}
					</p>
				</Col>
				<Col>
					<Row className='tabs'>
						<Col>
							<h4 onClick={() => handleClick(notes)}>
								Notes <sup>{user.notes && user.notes.length}</sup>{" "}
							</h4>
						</Col>
						<Col>
							<h4 onClick={() => handleClick(instructions)}>
								Instructions
								<sup>{user.instructions && user.instructions.length}</sup>{" "}
							</h4>
						</Col>
						<Col>
							<h4
								onClick={() => {
									setInstructions(false)
									setNotes(false)
									setAnalysis(true)
								}}
							>
								Analysis
							</h4>
						</Col>
					</Row>
					<Row className='m-5'>
						{user.notes && notes && <Notes notes={user.notes} />}
						{user.instructions && instructions && (
							<Instructions instructions={user.instructions} />
						)}
						{analysis && <Analysis />}
					</Row>
				</Col>
			</Row>
		</div>
	) : (
		<h2>Loading</h2>
	)
}

export default User
