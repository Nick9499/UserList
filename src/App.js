import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import User from "./components/User"
import UserList from "./components/UserList"

const App = () => {
	return (
		<BrowserRouter>
			<Route path='/' component={UserList} exact />
			<Route component={User} path='/user/:id' exact />
		</BrowserRouter>
	)
}

export default App
