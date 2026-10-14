import type { Meta, StoryObj } from '@storybook/react-vite'
import { HidingHeader } from '../src/index'
import { Content } from './Content'
import { Header } from './Header'

const StickyBelow = () => (
	<>
		<HidingHeader visibleHeightPropertyName="--hidingHeader-visible-height">
			<Header title="Sticky tabs below" source="StickyBelow.stories.tsx" />
		</HidingHeader>
		<nav className="tabs">
			<span>These tabs</span>
			<span>stay pinned</span>
			<span>below the header</span>
		</nav>
		<Content />
	</>
)

const meta: Meta<typeof StickyBelow> = {
	title: 'Sticky content below',
	component: StickyBelow,
}

export default meta

export const Default: StoryObj<typeof StickyBelow> = {}
