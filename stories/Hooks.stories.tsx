import type { Meta, StoryObj } from '@storybook/react-vite'
import { createPortal } from 'react-dom'
import {
	HidingHeader,
	useHideHidingHeader,
	usePauseHidingHeader,
	useRevealHidingHeader,
	useRunHidingHeader,
} from '../src/index'
import { Content } from './Content'
import { Header } from './Header'

// Rendered through a portal so that position: fixed is not affected by the
// header transform, while still having access to the hooks' context.
const Controls = () => {
	const reveal = useRevealHidingHeader()
	const hide = useHideHidingHeader()
	const pause = usePauseHidingHeader()
	const run = useRunHidingHeader()

	return createPortal(
		<div className="controls">
			<button type="button" onClick={reveal}>
				Reveal
			</button>
			<button type="button" onClick={hide}>
				Hide
			</button>
			<button type="button" onClick={pause}>
				Pause
			</button>
			<button type="button" onClick={run}>
				Run
			</button>
		</div>,
		document.body,
	)
}

const Hooks = () => (
	<>
		<HidingHeader>
			<Header title="Controlled with hooks" source="Hooks.stories.tsx" />
			<Controls />
		</HidingHeader>
		<Content />
	</>
)

const meta: Meta<typeof Hooks> = {
	title: 'Hooks',
	component: Hooks,
}

export default meta

export const Default: StoryObj<typeof Hooks> = {}
