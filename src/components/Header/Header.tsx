import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { BiSearch } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { MdClose, MdEmail, MdLock } from 'react-icons/md'

import Button from '@/ui/button/Button'
import Field from '@/ui/field/Field'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import Popup from '../Popup/Popup'

import Logo from './Logo'
import Menu from './Menu/Menu'

const Header: FC = () => {
	const { user } = useAuth()
	const [active, setActive] = useState(false)
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
		setActive(false)
	}
	return (
		<>
			<header className='text-grey flex justify-between p-5 uppercase items-center'>
				<div className='ml-5'>
					<Logo />
				</div>
				<div className='flex'>
					<Menu />
					<div className='flex'>
						<input
							type='text'
							placeholder='Film'
							className='border-b outline-none bg-transparent text-right px-2 w-32'
						/>
						<button>
							<BiSearch className='text-2xl ml-3' />
						</button>
						{user ? (
							<button>
								<FiUser className='text-3xl mx-5 text-primary font-extrabold' />
							</button>
						) : (
							<Button
								className='text-xs px-3 ml-3 py-2'
								onClick={() => setActive(!active)}
							>
								Log in
							</Button>
						)}
					</div>
				</div>
			</header>
			<Popup isActive={active}>
				<div
					className='flex justify-end text-xl cursor-pointer'
					onClick={() => setActive(false)}
				>
					<MdClose />
				</div>
				<h1 className='text-3xl text-center'>Auth</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex flex-col gap-5'>
						<Field
							title='Email'
							placeholder='Email'
							type='text'
							{...formRegister('email', { required: 'Email is required' })}
						>
							<MdEmail className='inline' />
						</Field>
						{errors.email && (
							<span className='text-red'>{errors.email.message}</span>
						)}
						<Field
							title='Password'
							placeholder='Password'
							type='password'
							{...formRegister('password', {
								required: 'Password is required'
							})}
						>
							<MdLock className='inline' />
						</Field>
						{errors.password && (
							<span className='text-red'>{errors.password.message}</span>
						)}
					</div>
					<div className='flex flex-col gap-4 mt-10'>
						<Button className='px-4 py-2'>Log in</Button>
					</div>
				</form>
			</Popup>
		</>
	)
}

export default Header
