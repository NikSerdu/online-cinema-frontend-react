import { IUser } from '@/types/user.interface'

import { instance } from '@/api/api.interceptor'

const USERS = 'users/profile'

type TypeData = {
	email: string
	name: string
}

interface IWatchLater {
	id: number
	name: string
}

type TypeResponseWatchLater = {
	watchLater: IWatchLater[]
	length: number
}

export const UserService = {
	async getProfile() {
		return instance<IUser>({
			url: `${USERS}`,
			method: 'GET'
		})
	},
	async getWatchLater() {
		return instance<TypeResponseWatchLater>({
			url: `${USERS}/watch-later`,
			method: 'GET'
		})
	},
	async update(data: TypeData) {
		return instance<IUser>({
			url: `${USERS}`,
			method: 'PUT',
			data
		})
	},
	async toggleWatchLater(filmId: number | string) {
		return instance<IUser>({
			url: `${USERS}/watch-later/${filmId}`,
			method: 'PATCH'
		})
	}
}
