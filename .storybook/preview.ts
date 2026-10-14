import type { Preview } from '@storybook/react-vite'
import 'hiding-header/dist/style.css'
import '../stories/styles.css'

const preview: Preview = {
	parameters: {
		layout: 'fullscreen',
		controls: {
			disable: true,
		},
	},
}

export default preview
