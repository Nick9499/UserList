import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Table, Image, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { listUsers } from "../actions/userAction"
import ResizableTable from "../Resizable"

const UserList = () => {
	let history = useHistory()
	const [sortAsc, setSortAsc] = useState(true)
	const [value, setValue] = useState("")
	const [showSearch, setShowSearch] = useState(false)
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

	const filterHandler = () => {
		const newUser = users.filter((user) => user.name === value)
		console.log(newUser)
	}

	const handleClick = (id) => {
		history.push(`/user/${id}`)
	}
	return (
		<div className='mt-5'>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th colSpan='5' className='text-center'>
							Contact List{" "}
							<i
								className='fas fa-filter '
								onClick={() => setShowSearch((prev) => !prev)}
							></i>
							{showSearch && (
								<>
									<input
										type='text'
										style={{ marginLeft: "5%", marginRight: "5%" }}
										value={value}
										onChange={(e) => setValue(e.target.value)}
									/>
									<Button onClick={filterHandler}>search</Button>
								</>
							)}
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
								)}{" "}
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
								)}{" "}
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
							</td>
						</tr>
						{users.map((user) => (
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
		</div>
	)
}

export default UserList
