import React from "react"
import { Card, Col, Image, Row } from "react-bootstrap"

const UserCard = ({ users, handleClick }) => {
	return (
		<div className='cards'>
			{users.map((user) => (
				<Card key={user.id}>
					<Card.Body>
						<Row onClick={() => handleClick(user.id)}>
							<Col>
								<Image src={user.url} fluid rounded thumbnail />
							</Col>
							<Col>
								<h5>{user.name}</h5>
								<p className='text-muted'>{user.email}</p>
								<p className='text-muted'>{user.phone}</p>
								<p className='text-muted'>{user.city}</p>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			))}
		</div>
	)
}

export default UserCard
