# Hiding Header React [![npm](https://img.shields.io/npm/v/hiding-header-react.svg)](https://www.npmjs.com/package/hiding-header-react) ![npm type definitions](https://img.shields.io/npm/types/hiding-header-react.svg)

Toggles header visibility on scroll. [Demo](https://filipchalupa.cz/hiding-header/demo).

![UI example](https://raw.githubusercontent.com/FilipChalupa/hiding-header/HEAD/screencast.gif)

## Installation

```bash
npm install hiding-header-react
```

## How to use

### Component

```jsx
import { HidingHeader } from 'hiding-header-react'

const Header = () => {
	return (
		<HidingHeader>
			<header
				style={{ backgroundColor: 'black', color: 'white', padding: '1em' }}
			>
				Put your content here
			</header>
		</HidingHeader>
	)
}
```

### CSS:

Import `node_modules/hiding-header/dist/style.css` to your CSS. It's few lines of code. You can alternatively copy paste it and adjust things like `z-index` to your needs.
