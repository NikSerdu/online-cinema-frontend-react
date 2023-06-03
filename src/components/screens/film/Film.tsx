import { FC } from 'react'

import { IFilm } from '@/types/film.interface'

import Info from './Info/Info'
import Reviews from './Reviews/Reviews'

export type TypeFilm = {
	film: IFilm
}

const Film: FC<TypeFilm> = ({ film }) => {
	return (
		<div className='ml-20 mt-10'>
			<Info film={film} />
			<div className=''>
				<h1 className='text-3xl text-white mb-16'>Отзывы</h1>
				<Reviews filmId={film.id} />
			</div>
		</div>
	)
}

export default Film
