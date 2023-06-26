import Image from 'next/image'
import { FC } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Catalog from '@/components/Catalog/Catalog'
import Meta from '@/components/Meta'

import Button from '@/ui/button/Button'

import { TypePaginationFilms } from '@/types/film.interface'

const images = [
	{ url: '/img/image.png', title: 'Test', width: 1530, height: 496 },
	{ url: '/img/image.png', title: 'Test', width: 1530, height: 496 },
	{ url: '/img/image.png', title: 'Test', width: 1530, height: 496 },
	{ url: '/img/image.png', title: 'Test', width: 1530, height: 496 }
]

const Home: FC<TypePaginationFilms> = ({ length, films }) => {
	return (
		<Meta title='Главная'>
			<div className='mt-10'>
				<Carousel
					centerMode={true}
					showStatus={false}
					autoPlay={true}
					infiniteLoop={true}
					showThumbs={false}
				>
					{images.map((image, index) => {
						return (
							<div className='mx-5' key={index}>
								<Image
									alt='Slide'
									src={image.url}
									width={image.width}
									height={image.height}
								/>
							</div>
						)
					})}
				</Carousel>
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
