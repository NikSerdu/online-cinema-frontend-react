import { IFilm, TypePaginationFilms } from '@/types/film.interface'

import { instance } from '@/api/api.interceptor'

import { TypeFilmData, TypeFilmDataFilters } from './film.types'

const FILMS = 'films'

export const FilmService = {
	async getAll(queryData = {} as TypeFilmDataFilters) {
		return instance<TypePaginationFilms>({
			url: FILMS,
			method: 'GET',
			params: queryData
		})
	},
	async getSimilar(id: string | number) {
		return instance<IFilm[]>({
			url: `${FILMS}/similar/${id}`,
			method: 'GET'
		})
	},
	async getByGenre(slug: string) {
		return instance<IFilm[]>({
			url: `${FILMS}/by-genre-slug/${slug}`,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<IFilm>({
			url: `${FILMS}/${id}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<IFilm>({
			url: FILMS,
			method: 'POST'
		})
	},
	async update(id: string | number, data: TypeFilmData) {
		return instance<IFilm>({
			url: `${FILMS}/${id}`,
			method: 'PUT',
			data
		})
	},
	async delete(id: string | number) {
		return instance<IFilm>({
			url: `${FILMS}/${id}`,
			method: 'DELETE'
		})
	}
}

export default FilmService
