import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'
import { SiGit, SiTelegram, SiVk } from 'react-icons/si'

import { menu } from '../Header/Menu/Menu'

const Footer: FC = () => {
	return (
		<div className='bg-grey w-full h-15 px-32 py-5 mt-16'>
			<div className='flex justify-between'>
				<div className='flex flex-col'>
					<h1 className='font-bold text-bg-color text-xl uppercase'>Меню</h1>
					<ul className='list-none text-lg'>
						{menu.map(item => {
							return (
								<li key={item.id}>
									<Link href={item.href}>{item.name}</Link>
								</li>
							)
						})}
					</ul>
				</div>
				<div className='flex flex-col'>
					<h1 className='font-bold text-bg-color text-xl uppercase'>
						Поддержка
					</h1>
					<ul className='list-none text-lg'>
						<li>
							<Link href='tel:+79789999999'>+79789999999</Link>
						</li>
						<li>
							<Link href='mailto:email@here.com'>email@here.com</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<h1 className='font-bold text-bg-color text-xl uppercase'>
						Наши соцсети
					</h1>
					<ul className='list-none text-4xl flex gap-5 justify-between mt-1'>
						<li>
							<Link href=''>
								<SiVk />
							</Link>
						</li>
						<li>
							<Link href=''>
								<SiTelegram />
							</Link>
						</li>
						<li>
							<Link href=''>
								<SiGit />
							</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-col'>
					<ul className='list-none text-lg'>
						<li className='flex items-center gap-1'>
							<AiOutlineCopyright /> Все права защищены
						</li>
						<li>
							<Link href=''>Политика конфиденциальности</Link>
						</li>
						<li>
							<Link href=''>Пользовательское соглашение</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
