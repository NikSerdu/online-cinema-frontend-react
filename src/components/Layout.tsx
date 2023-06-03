import { FC, PropsWithChildren } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className='flex flex-col h-full'>
			<div className='flex-shrink-0 flex-grow-1 basis-auto'>
				<Header />
			</div>
			<div className='flex-shrink-0 flex-grow-0 basis-auto'>{children}</div>
			<div className='flex-shrink-0 flex-grow-0 basis-auto'>
				<Footer />
			</div>
		</div>
	)
}

export default Layout
