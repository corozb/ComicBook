const Format = (data) => {
	let date = new Date(data).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	return date
}

export { Format }
