import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/ui/button/Button'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const Auth: FC = () => {
	const { isLoading } = useAuth()
	const { login, register, logout } = useActions()
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({ mode: 'onChange' })
	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') {
			login(data)
		} else {
			register(data)
		}
		reset()
	}
	return (
		<div>
			<h1 className='text-3xl text-white capitalize'>{type}</h1>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-5 w-96'
			>
				<input
					{...formRegister('email', { required: 'Email is required' })}
					type='text'
					placeholder='Email'
				/>
				{errors.email && (
					<span className='text-red'>{errors.email.message}</span>
				)}
				<input
					type='password'
					placeholder='Password'
					{...formRegister('password', { required: 'Password is required' })}
				/>
				{errors.password && (
					<span className='text-red'>{errors.password.message}</span>
				)}
				<Button className='px-4 py-1'>Let's go!</Button>
			</form>
			<Button className='px-4 py-2 mt-5' onClick={() => logout()}>
				Exit
			</Button>
		</div>
	)
}

export default Auth
