import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

export const menu = [
	{
		id: 1,
		name: 'Новинки',
		href: '/new'
	},
	{
		id: 2,
		name: 'Фильмы',
		href: '/films'
	},
	{
		id: 3,
		name: 'Сериалы',
		href: '/serials'
	}
]

const Menu: FC = () => {
	return (
		<nav className='flex'>
			<ul className='flex'>
				{menu.map(item => {
					return (
						<li
							className={cn(
								'px-14 text-xs py-2 font-semibold tracking-wider',
								item.id !== menu.length ? 'border-r' : null
							)}
							key={item.id}
						>
							<Link
								href={item.href}
								className='hover:opacity-70 transition-all'
							>
								{item.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Menu
