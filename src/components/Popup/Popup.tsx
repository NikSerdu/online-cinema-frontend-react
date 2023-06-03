import { FC, PropsWithChildren } from 'react'

import styles from './Popup.module.css'

const Popup: FC<PropsWithChildren<{ isActive: boolean }>> = ({
	children,
	isActive
}) => {
	return (
		<>
			<div className={isActive ? styles.active : styles.hidden}>
				<div className={styles.content}>
					<div className='w-96 bg-bg-color2 rounded-xl py-5 px-10 text-gr-2'>
						{children}
					</div>
				</div>
			</div>
		</>
	)
}

export default Popup
