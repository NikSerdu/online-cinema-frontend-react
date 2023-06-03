import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	isActive?: boolean
	isDisabled?: boolean
}
const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	children,
	onClick,
	isActive = false,
	isDisabled = false
}) => {
	return (
		<button
			className={cn(
				styles.gr,
				!isActive ? '' : styles.active,
				'rounded-3xl text-primary uppercase font-medium',
				className
			)}
			onClick={onClick}
			disabled={isDisabled}
			title={isDisabled ? 'Войдите, чтобы добавить!' : ''}
		>
			{children}
		</button>
	)
}

export default Button
