import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getDetails } from '../../utils/getUrls'

const Details = () => {
	const [comic, setComic] = useState([])
	let { id } = useParams()

	const getComic = async (id) => {
		const data = await getDetails(id)
		setComic(data.results)
	}

	useEffect(() => {
		getComic(id)
	}, [id])

	const setDetail = (items, name) => (
		<div>
			<h3>{name}</h3>
			<hr />
			<ul>
				{items.map((char, idx) => {
					return (
						<li key={idx}>
							<h4>{char.name}</h4>
						</li>
					)
				})}
			</ul>
		</div>
	)

	return (
		<>
			<h2>Character</h2>
			{comic.length !== 0 ? (
				<div>
					<img src={comic.image.original_url} alt=''></img>
					{setDetail(comic.character_credits, 'Characters')}
					{setDetail(comic.team_credits, 'Team')}
					{setDetail(comic.location_credits, 'Locations')}
					{setDetail(comic.concept_credits, 'Concepts')}
				</div>
			) : null}
		</>
	)
}

export default Details
