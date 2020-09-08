import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { getDetails } from '../../utils/getUrls'
import ErrorBoundary from '../../utils/ErrorBoundary'

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

	const Template = (array, section) => (
		<div>
			<h3>{section}</h3>
			<hr />
			<ul>
				{array.map((item, index) => {
					return (
						<li key={index}>
							<h4>{item.name}</h4>
						</li>
					)
				})}
			</ul>
		</div>
	)

	if (loading) {
		return <h2>Loading...</h2>
	}

	return (
		<>
			{comic.length !== 0 ? (
				<div>
					<img src={comic.image.original_url} alt=''></img>
					{Template(comic.character_credits, 'Characters')}
					{Template(comic.team_credits, 'Team')}
					{Template(comic.location_credits, 'Locations')}
					{Template(comic.concept_credits, 'Concepts')}
				</div>
			) : (
				<ErrorBoundary />
			)}
		</>
	)
}

export default Details
