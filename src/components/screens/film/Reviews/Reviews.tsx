import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'

import Button from '@/ui/button/Button'

import { useAuth } from '@/hooks/useAuth'
import { ILeaveReview, useReviews } from '@/hooks/useReviews'

const Reviews: FC<{ filmId: number }> = ({ filmId }) => {
	const { user } = useAuth()
	const {
		handleRating,
		isLoading,
		mutateAsync,
		rating,
		refetch,
		data: reviews
	} = useReviews(filmId)

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		getValues,
		setValue
	} = useForm<ILeaveReview>({ mode: 'onChange' })
	const onSubmit: SubmitHandler<ILeaveReview> = () => {
		const text = getValues('text')
		mutateAsync({ rating, text, filmId })
		reset()
		handleRating(0)
	}
	const validateRating = () => {
		return rating !== 0 || 'Rating is required!'
	}
	return (
		<div>
			{user ? (
				<form onSubmit={handleSubmit(onSubmit)} className='flex items-baseline'>
					<div className='w-2/5 flex flex-col'>
						<textarea
							placeholder='Оставьте свой отзыв'
							className='rounded-3xl bg-grey bg-opacity-50 p-4 resize-none h-28 text-white w-full'
							{...formRegister('text', { required: 'Text is required!' })}
						></textarea>
						{errors.text && (
							<span className='text-red mt-5 text-lg'>
								{errors.text.message}
							</span>
						)}
						<Button className='px-6 py-1 ml-auto mt-4'>Оставить отзыв</Button>
					</div>
					<div className='flex flex-col items-center'>
						<Rating
							className='ml-6'
							onClick={handleRating}
							transition={true}
							titleSeparator='из'
							{...formRegister('rating', { validate: validateRating })}
							initialValue={rating}
						/>
						{errors.rating && !rating && (
							<div className='text-red mt-5 text-lg'>
								{errors.rating.message}
							</div>
						)}
					</div>
				</form>
			) : (
				'Войдите, чтобы оставить отзыв!'
			)}
			<div className='text-white text-lg w-1/2 mt-18 flex flex-col-reverse gap-20'>
				{!isLoading &&
					reviews &&
					reviews.map(review => {
						return (
							<div className='' key={review.id}>
								<div className='flex'>
									<h3 className='h3 pt-0.5'>{review.user.name}</h3>
									<div className='ml-2'>
										<Rating
											initialValue={+review.rating}
											titleSeparator='из'
											readonly={true}
											size={23}
										/>
									</div>
								</div>
								<div className='mt-8'>{review.text}</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Reviews
