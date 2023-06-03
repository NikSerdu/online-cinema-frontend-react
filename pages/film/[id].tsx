import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Meta from '@/components/Meta'

import Film from '@/screens/film/Film'
import FilmService from '@/services/film/film.service'

const FilmPage: NextPage = () => {
	const { query } = useRouter()
	const id = query.id as string
	const {
		data: film,
		isLoading,
		refetch
	} = useQuery(['Film test'], () => FilmService.getById(id), {
		select: data => data.data,
		enabled: !!id
	})
	return (
		<>
			{!isLoading && film ? (
				<Meta title={film.name}>
					<Film film={film} />
				</Meta>
			) : null}
		</>
	)
}

// interface IParams extends ParsedUrlQuery {
// 	id: string
// }

// export async function getStaticPaths() {
// 	return {
// 		paths: [{ params: { id: 'id' } }],
// 		fallback: false
// 	}
// }

// export const getStaticProps: GetStaticProps<IFilm> = async ({ params }) => {
// 	const id = params?.id as string
// 	const { data } = await FilmService.getById(id)
// 	return {
// 		props: data
// 	}
// }

export default FilmPage
