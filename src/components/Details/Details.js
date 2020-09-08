import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { getDetails } from '../../utils/getUrls'
import ErrorBoundary from '../../utils/ErrorBoundary'
import Template from './Template'

const Details = () => {
	const history = useHistory()
	const [comic, setComic] = useState([])
	const [loading, setLoading] = useState(true)
	let { id } = useParams()

	const getComic = async (id) => {
		try {
			const data = await getDetails(id)
			setComic(data.results)
			setLoading(false)
		} catch (err) {
			alert(err)
			history.push('/')
		}
	}

	useEffect(() => {
		getComic(id)
	}, [id])

	if (loading) {
		return <h2>Loading...</h2>
	}

	return (
		<>
			{comic.length !== 0 ? (
				<div>
					<img src={comic.image.original_url} alt=''></img>
					<Template array={comic.character_credits} section='Characters' />
					<Template array={comic.team_credits} section='Team' />
					<Template array={comic.location_credits} section='Locations' />
					<Template array={comic.concept_credits} section='Concepts' />
				</div>
			) : (
				<ErrorBoundary />
			)}
		</>
	)
}

export default Details
