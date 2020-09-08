import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Format, sortByMostRecent } from '../../utils/Utils'
import { getComics } from '../../utils/getUrls'

const List = () => {
	const [comics, setComics] = useState([])

	const getData = async () => {
		const data = await getComics()
		const sorted = sortByMostRecent(data.results)
		setComics(sorted)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<h1>Latest Issues</h1>
			<ul>
				{comics.map((comic) => (
					<li key={comic.id}>
						<Link to={`/details/4000-${comic.id}`}>
							<img src={comic.image.original_url} alt=''></img>
							<h3>
								{comic.name ? comic.name : comic.volume.name} #
								{comic.issue_number}
							</h3>
							<p>{Format(comic.date_added)}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default List
