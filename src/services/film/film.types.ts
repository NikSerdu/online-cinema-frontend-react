export type TypeFilmData = {
	name: string
	description: string
	image: string
	genreId: number
}

export type TypeFilmDataFilters = {
	sort?: EnumFilmSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum EnumFilmSort {
	NEWEST = 'newest',
	OLDEST = 'oldest'
}
