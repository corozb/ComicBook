const API_URL =
	'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api'
const API_KEY = '3c7e0ea165c47c2a7eb67a2c576963e5c1f88c00'

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
