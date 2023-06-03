import { FC } from 'react'

import { TypeFilms } from '@/types/film.interface'

import CatalogItem from './CatalogItem'

const Catalog: FC<TypeFilms> = ({ films }) => {
	return (
		<div className='flex gap-16 mx-auto justify-center mt-10 w-4/5 flex-wrap max-w-7xl'>
			{films.map(film => {
				return <CatalogItem film={film} key={film.id} />
			})}
		</div>
	)
}

export default Catalog
