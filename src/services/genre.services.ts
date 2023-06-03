import { IGenre } from '@/types/genre.interface'

import { instance } from '@/api/api.interceptor'

const GENRES = 'genres'

export const GenreService = {
	async getAll() {
		return instance<IGenre[]>({
			url: GENRES,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<IGenre>({
			url: `${GENRES}/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return instance<IGenre>({
			url: `${GENRES}/${slug}`,
			method: 'GET'
		})
	},
	async update(id: string | number, name: string) {
		return instance<IGenre>({
			url: `${GENRES}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async create() {
		return instance<IGenre>({
			url: `${GENRES}`,
			method: 'POST'
		})
	},
	async delete(id: string | number) {
		return instance<IGenre>({
			url: `${GENRES}/${id}`,
			method: 'DELETE'
		})
	}
}
