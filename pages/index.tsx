import { GetStaticProps, NextPage } from 'next'

import { TypePaginationFilms } from '@/types/film.interface'

import Home from '@/screens/home/Home'
import FilmService from '@/services/film/film.service'

interface Props {}

const HomePage: NextPage<TypePaginationFilms> = ({ length, films }) => {
	return <Home films={films} length={length} />
}

export const getStaticProps: GetStaticProps<TypePaginationFilms> = async () => {
	const { data } = await FilmService.getAll({
		page: 1,
		perPage: 10
	})

	return {
		props: data,
		revalidate: 60
	}
}

export default HomePage
