import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faBars, faCompactDisc } from '@fortawesome/free-solid-svg-icons'

import { Format, sortByMostRecent } from '../../utils/Utils'
import { getComics } from '../../utils/getUrls'
import './Home.scss'

const List = () => {
	const [comics, setComics] = useState([])
	const [loading, setLoading] = useState(true)
	const [dataError, setDataError] = useState(false)
	const [messageError, setMessageError] = useState('')
	const [active, setActive] = useState(true)

	const getData = async () => {
		const data = await getComics()
		const sorted = sortByMostRecent(data.results)
		setComics(sorted)
		setLoading(false)

		if (data.error !== 'OK') {
			setDataError(true)
			setMessageError(data.error)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	if (loading) {
		return (
			<div className='spinner'>
				<FontAwesomeIcon icon={faCompactDisc} className='spinner__icon' />
			</div>
		)
	}

	return (
		<>
			{dataError === false ? (
				<>
					<div className='navbar-space'></div>
					<div className='navbar'>
						<h3>Latest Issues</h3>
						<div className='navbar__icons'>
							<span
								className={!active ? 'navbar__icons active' : 'navbar__icons'}
								onClick={() => setActive(false)}>
								<FontAwesomeIcon icon={faBars} />
								<div className='navbar__name'>List</div>
							</span>
							<span
								className={active ? 'navbar__icons active' : 'navbar__icons'}
								onClick={() => setActive(true)}>
								<FontAwesomeIcon icon={faTh} />
								<div className='navbar__name'>Grid</div>
							</span>
						</div>
					</div>
					<div className='wrap'>
						{comics.map((comic) => (
							<div
								key={comic.id}
								className={active ? 'card grid' : 'card list'}>
								<Link to={`/details/4000-${comic.id}`}>
									<img src={comic.image.original_url} alt=''></img>
									<div className='card__description'>
										<h3>
											{comic.name ? comic.name : comic.volume.name} #
											{comic.issue_number}
										</h3>
										<p>{Format(comic.date_added)}</p>
									</div>
								</Link>
							</div>
						))}
					</div>
				</>
			) : (
				<h2 className='errorMessage'>{messageError}</h2>
			)}
		</>
	)
}

export default List
