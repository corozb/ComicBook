import React from 'react'

const Template = ({ array, section }) => {
	console.log('title', section)
	return (
		<>
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
		</>
	)
}

export default Template
