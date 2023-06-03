import { IReview } from '@/types/reviews.interface'

import { instance } from '@/api/api.interceptor'

const REVIEWS = 'reviews'

type TypeData = {
	text: string
	rating: number
}

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<IReview[]>({
			url: `${REVIEWS}/${id}`,
			method: 'GET'
		})
	},
	async leave(id: string | number, data: TypeData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${id}`,
			method: 'POST',
			data
		})
	}
}
