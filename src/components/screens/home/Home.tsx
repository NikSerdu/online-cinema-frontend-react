import { FC } from 'react'

import Carousel from '@/components/Carousel/Carousel'
import Catalog from '@/components/Catalog/Catalog'
import Meta from '@/components/Meta'

import Button from '@/ui/button/Button'

import { useCarousel } from '@/hooks/useCarousel'

import { TypePaginationFilms } from '@/types/film.interface'

const images = [
	{ url: '/img/image.png', title: 'Test', width: 1530, height: 496 },
	{ url: '/img/image.png', title: 'Test', width: 1530, height: 496 },
	{ url: '/img/image.png', title: 'Test', width: 1530, height: 496 },
	{ url: '/img/image.png', title: 'Test', width: 1530, height: 496 }
]

const Home: FC<TypePaginationFilms> = ({ length, films }) => {
	const { next, prev, numberOfSlide, offset } = useCarousel(images)
	return (
		<Meta title='Главная'>
			<div className='mt-10'>
				<Carousel
					images={images}
					gap={20}
					next={next}
					prev={prev}
					offset={offset}
					numberOfSlide={numberOfSlide}
				/>
			</div>
			<div className='flex justify-center flex-wrap gap-8 mt-10'>
				<Button className='px-6'>Фильмы</Button>
				<Button className='px-6'>Сериалы</Button>
			</div>
			<Catalog films={films} />
		</Meta>
	)
}

export default Home
