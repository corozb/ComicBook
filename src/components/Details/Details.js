import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

import { getDetails } from '../../utils/getUrls'
import ErrorBoundary from '../../utils/ErrorBoundary'
import Template from '../Template/Template'
import './Details.scss'

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
		return (
			<div className='spinner'>
				<FontAwesomeIcon icon={faCompactDisc} className='spinner__icon' />
			</div>
		)
	}

	console.log('comic', comic.team_credits)

	return (
		<>
			{comic.length !== 0 ? (
				<div className='details'>
					<div className='details__info'>
						<Template array={comic.character_credits} section='Characters' />
						<Template array={comic.team_credits} section='Team' />
						<Template array={comic.location_credits} section='Locations' />
						<Template array={comic.concept_credits} section='Concepts' />
					</div>
					<aside className='details__image'>
						<img src={comic.image.original_url} alt=''></img>
					</aside>
				</div>
			) : (
				<ErrorBoundary />
			)}
		</>
	)
}

export default Details
