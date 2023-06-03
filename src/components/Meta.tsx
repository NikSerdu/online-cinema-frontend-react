import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren } from 'react'

interface ISeo {
	title: string
	description?: string
}

const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	description,
	children
}) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`
	return (
		<div>
			<Head>
				<title itemProp='headline>'>{title}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={description}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={title} />
						<meta property='og:url' content={currentUrl} />
						<meta property='og:description' content={description} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</div>
	)
}

export default Meta
