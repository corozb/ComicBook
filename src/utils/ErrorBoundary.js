import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

const ErrorBoundary = () => {
	const [redirect, setRedirect] = useState(false)
	const [seconds, setSeconds] = useState(5)

	useEffect(() => {
		setTimeout(() => setRedirect(true), 5000)
	}, [])

	useEffect(() => {
		setTimeout(() => setSeconds(seconds - 1), 1000)
	})

	return (
		<>
			{redirect ? <Redirect to='/' noThrow /> : null}
			<h2>
				There was an error with this page. <Link to='/'>Click Here</Link> to go
				back home page or wait <strong className='seconds'>{seconds}</strong>{' '}
				seconds.
			</h2>
		</>
	)
}

export default ErrorBoundary
