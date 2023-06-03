import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { ReviewService } from '@/services/review.service'

export interface ILeaveReview {
	filmId: number
	rating: number
	text: string
}
export const useReviews = (movieId: number) => {
	const [rating, setRating] = useState(0)
	const { refetch, isLoading, data } = useQuery(
		['movie reviews', movieId],
		() => ReviewService.getById(movieId),
		{
			select: data => data.data
		}
	)

	const { mutateAsync } = useMutation(
		['Leave review'],
		({ filmId, rating, text }: ILeaveReview) =>
			ReviewService.leave(filmId, { rating, text }),
		{
			onSuccess: () => {
				refetch()
			}
		}
	)

	const handleRating = (rate: number) => {
		setRating(rate)
	}

	return { data, refetch, isLoading, mutateAsync, handleRating, rating }
}
