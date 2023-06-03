import { IUser } from '@/types/user.interface'

import { IFilm } from './film.interface'

export interface IReview {
	id: number
	user: IUser
	createdAt: string
	text: string
	rating: string
	film: IFilm
}
