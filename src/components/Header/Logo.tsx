import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
	return (
		<>
			<Link
				href={'/'}
				className='tracking-wider text-3xl font-extrabold bg-gradient-to-r from-primary to-gr-2 bg-clip-text text-transparent flex items-center font-chau'
			>
				<Image
					src={'/img/logo.png'}
					width={130}
					height={32}
					alt='MovieWave'
					className='-mr-1'
				/>
				MovieWave
			</Link>
		</>
	)
}

export default Logo
