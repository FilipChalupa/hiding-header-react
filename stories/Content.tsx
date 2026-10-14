import type { FunctionComponent } from 'react'

export const Content: FunctionComponent = () => (
	<main className="content">
		<p>Scroll down to hide the header, scroll up to reveal it.</p>
		{Array.from({ length: 30 }, (_, index) => (
			<p key={index}>
				Paragraph {index + 1}. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere
				velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.
			</p>
		))}
	</main>
)
