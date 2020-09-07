import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Format } from '../../utils/Format'

const List = () => {
	const [comics, setComics] = useState([])
	const API_URL =
		'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api'
	const API_KEY = '3c7e0ea165c47c2a7eb67a2c576963e5c1f88c00'

	const getData = async () => {
		const response = await fetch(
			`${API_URL}/issues/?api_key=${API_KEY}&format=json`
		)
		const data = await response.json()
		const sorted = sortByMostRecent(data.results)
		setComics(sorted)
	}

	const sortByMostRecent = (array) =>
		array.sort((a, b) => new Date(b.date_added) - new Date(a.date_added))

	console.log('comics', comics)

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<h1>Latest Issues</h1>
			<ul>
				{comics.map((comic) => (
					<Link to={`/details/${comic.id}`}>
						<li key={comic.id}>
							<img src={comic.image.original_url} alt=''></img>
							<h3>
								{comic.name ? comic.name : comic.volume.name} #
								{comic.issue_number}
							</h3>
							<p>{Format(comic.date_added)}</p>
							<p>{comic.date_added}</p>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default List
