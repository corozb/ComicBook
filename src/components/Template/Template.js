import React from 'react'

import './Template.scss'

const Template = ({ array, section }) => (
	<>
		<div className='template__details'>
			<h3>{section}</h3>
			{array.length !== 0 ? (
				<div className='template__items'>
					<div className='template__items-list'>
						<ul>
							{array.map((item, index) => {
								return (
									<li key={index}>
										<h4
											onClick={() =>
												(window.location.href = item.site_detail_url)
											}>
											{item.name}
										</h4>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			) : (
				<div className='template__space'>No data</div>
			)}
		</div>
	</>
)

export default Template
