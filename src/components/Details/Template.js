import React from 'react'

const Template = (array, section) => (
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

export default Template
