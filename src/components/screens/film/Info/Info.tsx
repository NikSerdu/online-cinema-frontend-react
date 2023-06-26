import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Button from '@/ui/button/Button'

import { useAuth } from '@/hooks/useAuth'
import { useWatchLater } from '@/hooks/useWatchLater'

import { TypeFilm } from '../Film'

import styles from './Info.module.scss'

const images = [
	{ url: '/img/poster2.svg', title: 'Poster', height: 125, width: 90 },
	{ url: '/img/poster.svg', title: 'Poster', height: 125, width: 90 },
	{ url: '/img/poster2.svg', title: 'Poster', height: 125, width: 90 }
]

const Info: FC<TypeFilm> = ({
	film: {
		id,
		name,
		age,
		author,
		country,
		genres,
		duration,
		image,
		year,
		description
	}
}) => {
	const { user } = useAuth()
	const [show, setShow] = useState(false)
	const { isLoading, isActive, mutateAsync } = useWatchLater(id)
	return (
		<div>
			<div className='flex items-center'>
				<div className='flex'>
					<Image
						src={`/img/poster.svg`}
						height={466}
						width={333}
						alt='Poster'
						className={cn('rounded-xl', styles.poster)}
					/>
					<div className='ml-24 flex flex-col justify-between'>
						<div className=''>
							<div className='text-3xl text-white uppercase font-semibold'>
								{name} <span className='text-orange text-xl ml-2'>8,5</span>
							</div>
							<div className='flex flex-col gap-3 text-lg mt-8'>
								<div className='text-white'>
									<span className='text-white opacity-50 inline-block w-28'>
										Жанр:
									</span>
									{genres.map(g => `${g.name} `)}
								</div>
								<div className='text-white'>
									<span className='text-white opacity-50 inline-block w-28'>
										Режиссёр:
									</span>
									{author}
								</div>
								<div className='text-white'>
									<span className='text-white opacity-50 inline-block w-28'>
										Страна:
									</span>
									{country}
								</div>
								<div className='text-white'>
									<span className='text-white opacity-50 inline-block w-28'>
										Год:
									</span>
									{year}
								</div>
							</div>
						</div>
						<div className='flex gap-3'>
							<Button className='px-16 py-2 text-base font-bold'>
								Трейлер
							</Button>
							<Button
								className='px-8 py-2 text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed'
								onClick={() => user && mutateAsync()}
								isActive={isActive}
								isDisabled={!user}
							>
								Смотреть позже
							</Button>
						</div>
					</div>
				</div>
				<div className='ml-40'>
					<Carousel
						showThumbs={false}
						infiniteLoop={true}
						showIndicators={false}
						showStatus={false}
						className='w-80'
						autoPlay={true}
					>
						{images.map(image => {
							return (
								<Image
									alt='Slide'
									src={image.url}
									width={image.width}
									height={image.height}
									className='rounded-xl'
								/>
							)
						})}
					</Carousel>
				</div>
			</div>
			<div className='w-1/2 text-white mt-16'>
				{description.length > 300 && !show
					? `${description.slice(0, 250)}...`
					: description}
			</div>
			{description.length > 300 ? (
				<div
					className='text-grey hover:cursor-pointer'
					onClick={() => setShow(!show)}
				>
					{show ? 'Скрыть' : 'Показать'}
				</div>
			) : null}
		</div>
	)
}

export default Info
