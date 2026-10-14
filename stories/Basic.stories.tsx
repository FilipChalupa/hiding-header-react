import type { Meta, StoryObj } from '@storybook/react-vite'
import { HidingHeader } from '../src/index'
import { Content } from './Content'
import { Header } from './Header'

const meta: Meta<typeof HidingHeader> = {
	title: 'Basic',
	component: HidingHeader,
}

export default meta

type Story = StoryObj<typeof HidingHeader>

export const Default: Story = {
	render: () => (
		<>
			<HidingHeader>
				<Header title="Hiding header" source="Basic.stories.tsx" />
			</HidingHeader>
			<Content />
		</>
	),
}

export const WithoutSnap: Story = {
	name: 'Without snap',
	render: () => (
		<>
			<HidingHeader snap={false}>
				<Header
					title="Without snap: the header can stay partly visible"
					source="Basic.stories.tsx"
				/>
			</HidingHeader>
			<Content />
		</>
	),
}
