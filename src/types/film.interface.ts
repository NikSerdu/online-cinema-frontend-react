import { IGenre } from './genre.interface'
import { IReview } from './reviews.interface'

export interface IFilm {
	id: number
	name: string
	author: string
	year: number
	country: string
	duration: number
	age: number
	description: string
	reviews: IReview[]
	image: string
	createdAt: string
	genres: IGenre[]
}

export interface IFilmDetails {
	film: IFilm
}

export type TypeFilms = {
	films: IFilm[]
}

export type TypePaginationFilms = {
	length: number
	films: IFilm[]
}
