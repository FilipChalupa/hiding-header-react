import type { FunctionComponent, ReactNode } from 'react'

const sourceBaseUrl =
	'https://github.com/FilipChalupa/hiding-header-react/blob/main/stories'

export const Header: FunctionComponent<{
	title: string
	source: string
	isHome?: boolean
	children?: ReactNode
}> = ({ title, source, isHome = false, children }) => (
	<header className={`header${isHome ? ' is-home' : ''}`}>
		<h1 className="header-title">{title}</h1>
		<a href={`${sourceBaseUrl}/${source}`} target="_blank" rel="noreferrer">
			View source
		</a>
		{children}
	</header>
)
