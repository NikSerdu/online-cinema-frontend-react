import { useState } from 'react'

type TypeImage = {
	url: string
	title: string
	width: number
	height: number
}

export const useCarousel = (images: TypeImage[], gap: number = 0) => {
	const [offset, setOffset] = useState(images[0].width + gap * 2)
	const [numberOfSlide, setNumberOfSlide] = useState(2)
	const next = () => {
		debugger
		if (offset >= images[0].width * (images.length - 1)) {
			let newOffset = 0
			setOffset(newOffset)
			setNumberOfSlide(1)
		} else {
			let newOffset = offset + images[0].width + gap * 2
			setOffset(newOffset)
			setNumberOfSlide(numberOfSlide + 1)
		}
	}

	const prev = () => {
		if (offset === 0) {
			const newOffset = images[0].width * (images.length - 1)
			setOffset(newOffset)
			setNumberOfSlide(images.length)
		} else {
			const newOffset = offset - images[0].width - gap * 2
			setOffset(newOffset)
			setNumberOfSlide(numberOfSlide - 1)
		}
	}
	return { next, prev, offset, numberOfSlide }
}
