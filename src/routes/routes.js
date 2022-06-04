import { lazy, Suspense } from 'react'

const Loader = Component => props =>
	(
		<Suspense fallback={'Loading...'}>
			<Component {...props} />
		</Suspense>
	)

const Pokedex = Loader(lazy(() => import('../content/Pokedex/Pokedex')))

export const routes = [
	{
		path: '/',
		element: <Pokedex />,
	},
]
