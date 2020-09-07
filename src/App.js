import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import List from './components/List/List'
import Details from './components/Details/Details'
import './App.css'

function App() {
	return (
		<div className='App'>
			<h1>Comic Book</h1>
			<Router>
				<Route path='/' exact component={List} />
				<Route path='/details/:id' exact component={Details} />
			</Router>
		</div>
	)
}

export default App
