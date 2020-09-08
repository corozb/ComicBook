import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home/Home'
import Details from './components/Details/Details'
import './App.css'

function App() {
	return (
		<div className='App'>
			<Router>
				<Link to='/'>
					<h1>Comic Book</h1>
				</Link>
				<Route path='/' exact component={Home} />
				<Route path='/details/:id' exact component={Details} />
			</Router>
		</div>
	)
}

export default App
