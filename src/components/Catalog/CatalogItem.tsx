import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { IFilm } from '@/types/film.interface'

interface ICatalogItem {
	film: IFilm
}

const CatalogItem: FC<ICatalogItem> = ({ film: { name, image, id } }) => {
	return (
		<Link href={`/film/${id}`} className='text-grey text-center relative'>
			<Image
				src={'/img/age-limit.svg'}
				width={30}
				height={18}
				alt='Age limit'
				className='absolute right-5 top-1.5'
			/>
			<Image
				src={`${image}`}
				height={272 * 1.25}
				width={194 * 1.25}
				alt='Poster'
				className='h-80 rounded-xl'
			/>
			<h2 className='text-xl'>{name}</h2>
		</Link>
	)
}

export default CatalogItem
