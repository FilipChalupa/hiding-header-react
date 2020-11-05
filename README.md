# Hiding Header React [![npm](https://img.shields.io/npm/v/hiding-header-react.svg)](https://www.npmjs.com/package/hiding-header-react) [![Dependencies](https://img.shields.io/david/FilipChalupa/hiding-header-react.svg)](https://www.npmjs.com/package/hiding-header-react?activeTab=dependencies) ![npm type definitions](https://img.shields.io/npm/types/hiding-header-react.svg)

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
	return <HidingHeader>Put your content here</HidingHeader>
}
```

### CSS

```css
.hidingHeader {
	position: relative;
	--hidingHeader-height: auto;
	--hidingHeader-bounds-height: auto;
	z-index: 10;
	height: var(--hidingHeader-bounds-height);
	margin-bottom: calc(
		var(--hidingHeader-height) - var(--hidingHeader-bounds-height)
	);
	pointer-events: none;
}

.hidingHeader-in {
	position: relative;
	position: sticky;
	top: 0;
	pointer-events: auto;
}
```
