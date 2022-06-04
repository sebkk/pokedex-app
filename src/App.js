import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
	const content = useRoutes(routes)
	const [pokemons, setPokemons] = useState(null)

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
			.then(response => response.json())
			.then(data => setPokemons(data.results))
			.catch(err => console.error(err))

		// console.log(pokemons)
	}, [])

	console.log(pokemons)

	return <div>{content}</div>
}

export default App
