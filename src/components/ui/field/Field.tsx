import { InputHTMLAttributes, forwardRef } from 'react'

interface IField extends InputHTMLAttributes<HTMLInputElement> {
	title: string
	placeholder: string
	type: string
}

const Field = forwardRef<HTMLInputElement, IField>(
	({ title, placeholder, type, children, ...rest }, ref) => {
		return (
			<div className='flex flex-col'>
				<span className='flex items-center text-xl gap-2'>
					{children}
					{title}
				</span>
				<input
					ref={ref}
					type={type}
					placeholder={placeholder}
					className='border rounded-lg p-2 outline-none text-xl text-bg-color mt-2'
					{...rest}
				></input>
			</div>
		)
	}
)

export default Field
