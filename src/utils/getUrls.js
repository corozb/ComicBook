const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY

const getComics = async () => {
	const response = await fetch(
		`${API_URL}/issues/?api_key=${API_KEY}&format=json`
	)
	const data = await response.json()
	return data
}

const getDetails = async (id) => {
	const response = await fetch(
		`${API_URL}/issue/${id}/?api_key=${API_KEY}&format=json`
	)
	const data = await response.json()
	return data
}

export { getComics, getDetails }
