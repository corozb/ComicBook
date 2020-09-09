import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './components/Home/Home'
import Details from './components/Details/Details'
import './App.scss'

function App() {
	return (
		<div className='app'>
			<Router>
				<Link to='/'>
					<header>
						<h1>Comic Book</h1>
					</header>
				</Link>
				<Route path='/' exact component={Home} />
				<Route path='/details/:id' exact component={Details} />
			</Router>
		</div>
	)
}

export default App
