// import axios from 'axios'
// import { parseCookies } from 'nookies'
// import { errorCatch, getContentType } from './api.helper'
// import { removeFromStorage } from '@/services/auth/auth.helper'
// import { AuthService } from '@/services/auth/auth.service'
// export const instance = axios.create({
// 	baseURL: 'http://localhost:3000/api/',
// 	headers: getContentType()
// })
// instance.interceptors.request.use(async config => {
// 	const cookies = parseCookies()
// 	const accessToken = cookies.accessToken
// 	console.log(accessToken)
// 	// const accessToken = getAccessToken()
// 	if (config.headers && accessToken) {
// 		config.headers.Authorization = `Bearer ${accessToken}`
// 	}
// 	return config
// })
// instance.interceptors.response.use(
// 	config => config,
// 	async error => {
// 		const originalRequest = error.config
// 		if (
// 			(error?.response?.status === 401 ||
// 				errorCatch(error) === 'jwt expired' ||
// 				errorCatch(error) === 'jwt must be provided') &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			originalRequest._isRetry = true
// 			try {
// 				await AuthService.getNewTokens()
// 				return instance.request(originalRequest)
// 			} catch (error) {
// 				if (errorCatch(error) === 'jwt expired') {
// 					removeFromStorage()
// 				}
// 			}
// 		}
// 		throw error
// 	}
// )
import axios from 'axios'

import { errorCatch, getContentType } from './api.helper'
import { getAccessToken, removeTokenStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

export const axiosClassic = axios.create({
	baseURL: 'http://localhost:3000/api/',
	headers: getContentType()
})

export const instance = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
})

instance.interceptors.request.use(config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await AuthService.getNewTokens()

				return instance.request(originalRequest)
			} catch (e) {
				if (errorCatch(e) === 'jwt expired') removeTokenStorage()
			}
		}

		throw error
	}
)
