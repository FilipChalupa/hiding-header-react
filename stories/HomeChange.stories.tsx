import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { HidingHeader } from '../src/index'
import { Content } from './Content'
import { Header } from './Header'

const HomeChange = () => {
	const [isHome, setIsHome] = useState(true)

	return (
		<>
			<HidingHeader onHomeChange={setIsHome}>
				<Header
					title="Transparent until scrolled"
					source="HomeChange.stories.tsx"
					isHome={isHome}
				/>
			</HidingHeader>
			<Content />
		</>
	)
}

const meta: Meta<typeof HomeChange> = {
	title: 'Home change',
	component: HomeChange,
}

export default meta

export const Default: StoryObj<typeof HomeChange> = {}
