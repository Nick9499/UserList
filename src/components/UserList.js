import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Table, Image, Modal, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { findUserBy, listUsers } from "../actions/userAction"
import ResizableTable from "../Resizable"
import UserCard from "./UserCard"

const UserList = () => {
	let history = useHistory()
	const [search, setSearch] = useState("")
	const [sortAsc, setSortAsc] = useState(true)
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	const dispatch = useDispatch()
	const userList = useSelector((state) => state.userList)
	const { users } = userList

	useEffect(() => {
		dispatch(listUsers())
	}, [dispatch])

	const ascSortNameHandler = () => {
		users.sort((a, b) => {
			var nameA = a.name.toUpperCase() // ignore upper and lowercase
			var nameB = b.name.toUpperCase() // ignore upper and lowercase
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}

			// names must be equal
			return 0
		})
		setSortAsc((prev) => !prev)
	}
	const ascSortCityHandler = () => {
		users.sort((a, b) => {
			var cityA = a.city.toUpperCase() // ignore upper and lowercase
			var cityB = b.city.toUpperCase() // ignore upper and lowercase
			if (cityA < cityB) {
				return -1
			}
			if (cityA > cityB) {
				return 1
			}

			// names must be equal
			return 0
		})
		setSortAsc((prev) => !prev)
	}

	const descNameSortHandler = () => {
		users.sort((a, b) => {
			var nameA = a.name.toUpperCase() // ignore upper and lowercase
			var nameB = b.name.toUpperCase() // ignore upper and lowercase
			if (nameA > nameB) {
				return -1
			}
			if (nameA < nameB) {
				return 1
			}

			// names must be equal
			return 0
		})
		setSortAsc((prev) => !prev)
	}
	const ascPhoneSortHandler = () => {
		users.sort((a, b) => a - b)
		setSortAsc((prev) => !prev)
	}
	const descCitySortHandler = () => {
		users.sort((a, b) => {
			var cityA = a.city.toUpperCase() // ignore upper and lowercase
			var cityB = b.city.toUpperCase() // ignore upper and lowercase
			if (cityA > cityB) {
				return -1
			}
			if (cityA < cityB) {
				return 1
			}

			// names must be equal
			return 0
		})
		setSortAsc((prev) => !prev)
	}

	const descPhoneSortHandler = () => {
		users.sort((a, b) => b - a)
		setSortAsc((prev) => !prev)
	}

	const handleClick = (id) => {
		history.push(`/user/${id}`)
	}
	const inputHandler = (e) => {
		setSearch(e.target.value)
	}
	const filterFunction = (val) => {
		if (search === "") {
			return val
		} else if (val.name.toLowerCase().includes(search.toLowerCase())) {
			return val
		}
	}
	const modal = (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Filter</Modal.Title>
			</Modal.Header>
			<Form.Group className='m-3' controlId='exampleForm.ControlInput1'>
				<Form.Control
					type='text'
					placeholder='Search'
					value={search}
					onChange={inputHandler}
				/>
			</Form.Group>
		</Modal>
	)
	return (
		<div className='mt-5'>
			{modal}
			<Table striped bordered hover className='table'>
				<thead>
					<tr>
						<th colSpan='5' className='text-center'>
							Contact List
						</th>
					</tr>
				</thead>
				<ResizableTable resizable={true} resizeOptions={{}}>
					<tbody>
						<tr>
							<td>Profile</td>
							<td className='text-center'>
								Name{"  "}
								{sortAsc ? (
									<i
										className='fas fa-sort-amount-up'
										onClick={ascSortNameHandler}
									></i>
								) : (
									<i
										className='fas fa-sort-amount-down'
										onClick={descNameSortHandler}
									></i>
								)}
								{"   "}
								<i className='fas fa-filter ' onClick={handleShow}></i>
							</td>
							<td>
								Email{"  "}
								{sortAsc ? (
									<i
										className='fas fa-sort-amount-up'
										onClick={ascSortNameHandler}
									></i>
								) : (
									<i
										className='fas fa-sort-amount-down'
										onClick={descNameSortHandler}
									></i>
								)}
								{"   "}
								<i className='fas fa-filter ' onClick={handleShow}></i>
							</td>
							<td>
								Phone
								{sortAsc ? (
									<i
										className='fas fa-sort-amount-up'
										onClick={ascPhoneSortHandler}
									></i>
								) : (
									<i
										className='fas fa-sort-amount-down'
										onClick={descPhoneSortHandler}
									></i>
								)}
								{"   "}
								<i className='fas fa-filter ' onClick={handleShow}></i>
							</td>
							<td>
								City{" "}
								{sortAsc ? (
									<i
										className='fas fa-sort-amount-up'
										onClick={ascSortCityHandler}
									></i>
								) : (
									<i
										className='fas fa-sort-amount-down'
										onClick={descCitySortHandler}
									></i>
								)}
								{"   "}
								<i className='fas fa-filter ' onClick={handleShow}></i>
							</td>
						</tr>
						{users.filter(filterFunction).map((user) => (
							<tr key={user.id} onClick={() => handleClick(user.id)}>
								<td>
									<Image
										src={user.url}
										thumbnail
										fluid
										style={{ width: "60px" }}
									/>
								</td>
								<td>{user.name} </td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>{user.city}</td>
							</tr>
						))}
					</tbody>
				</ResizableTable>
			</Table>
			<UserCard users={users} handleClick={handleClick} />
		</div>
	)
}

export default UserList
