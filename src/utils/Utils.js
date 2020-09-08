const Format = (data) => {
	let date = new Date(data).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	return date
}

const sortByMostRecent = (array) =>
	array.sort((a, b) => new Date(b.date_added) - new Date(a.date_added))

export { Format, sortByMostRecent }
