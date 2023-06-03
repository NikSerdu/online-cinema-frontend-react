import Image from 'next/image'
import { FC } from 'react'

const Slider: FC = () => {
	return (
		<div className='flex justify-center'>
			<Image
				src={'/img/image.png'}
				alt='Image'
				width={1400}
				height={496}
				className='mx-auto mt-5 rounded-xl w-5/6'
			/>
		</div>
	)
}

export default Slider
