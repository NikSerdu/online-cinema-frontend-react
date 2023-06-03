import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import { useAuth } from './useAuth'
import { UserService } from '@/services/user.service'

export const useWatchLater = (id: number) => {
	const { user } = useAuth()
	const [isActive, setActive] = useState(false)
	const { data, isLoading, refetch } = useQuery(
		['Get watch later'],
		() => {
			return UserService.getWatchLater()
		},
		{
			select: data => data.data,
			enabled: !!user
		}
	)
	const { mutateAsync } = useMutation(
		['Toggle watch later'],
		() => UserService.toggleWatchLater(id),
		{
			onSuccess: () => {
				setActive(!isActive)
				refetch()
			}
		}
	)
	useEffect(() => {
		if (!data) return

		const isWatchLater = data.watchLater.some(film => film.id === id)

		if (isActive !== isWatchLater) setActive(isWatchLater)
	}, [data, isActive, id])
	return { data, isLoading, isActive, mutateAsync }
}
