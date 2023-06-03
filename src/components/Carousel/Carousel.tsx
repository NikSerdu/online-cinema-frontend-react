import cn from 'clsx'
import { FC } from 'react'

import styles from './Carousel.module.css'

type TypeImage = {
	url: string
	title: string
	width: number
	height: number
}

type TypeData = {
	images: TypeImage[]
	gap?: number
	showArrows?: boolean
	showDots?: boolean
	next: () => void
	prev: () => void
	offset: number
	numberOfSlide: number
}

const Carousel: FC<TypeData> = ({
	images,
	gap = 0,
	showArrows = true,
	showDots = true,
	next,
	prev,
	offset,
	numberOfSlide
}) => {
	const width = images[0].width
	return (
		<>
			<div className={`${styles.slider} relative`}>
				<div className={''}>
					<div
						className='flex transition-all'
						style={{
							transform: `translateX(-${offset}px)`,
							maxWidth: `${width + gap * 2}px`,
							margin: `0 -${gap * 2}px`
						}}
					>
						{images.map((image, index) => (
							<img
								key={index}
								src={image.url}
								alt='Test'
								className='rounded-xl'
								style={{ margin: `0 ${gap}px` }}
							/>
						))}
					</div>
				</div>
				<div
					className={
						'flex justify-center items-center gap-3 absolute bottom-7 left-0 right-0'
					}
				>
					{showArrows && (
						<div
							onClick={prev}
							className={cn('text-white text-xl p-2 hover:cursor-pointer')}
						>
							&lt;
						</div>
					)}
					{showDots && (
						<div className='flex gap-3'>
							{images.map((_, index) => (
								<div
									key={index}
									className={`h-4 w-4 rounded-xl border border-white ${
										numberOfSlide === index + 1 ? styles.active : ''
									}`}
								/>
							))}
						</div>
					)}
					{showArrows && (
						<div
							onClick={next}
							className='text-white text-xl p-2 hover:cursor-pointer'
						>
							&gt;
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Carousel
