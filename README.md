# Hiding Header React [![npm](https://img.shields.io/npm/v/hiding-header-react.svg)](https://www.npmjs.com/package/hiding-header-react) ![npm type definitions](https://img.shields.io/npm/types/hiding-header-react.svg)

Toggles header visibility on scroll. Try interactive [CodeSandbox demo](https://codesandbox.io/s/react-hiding-header-xk8rlb?file=/src/App.js).

![UI example](https://raw.githubusercontent.com/FilipChalupa/hiding-header/HEAD/screencast.gif)

## Installation

```bash
npm install hiding-header-react
```

## How to use

### Component

```jsx
import { HidingHeader } from 'hiding-header-react'
import 'hiding-header/dist/style.css'

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

### CSS

Import `hiding-header/dist/style.css` to your CSS. It's few lines of code. You can alternatively copy paste it and adjust things like `z-index` to your needs.

### Advanced use

`<HidingHeader>` accepts several optional props.

| property name                 | default                             | description                                                               |
| ----------------------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| `className`                   | `'hidingHeader'`                    | Wrapper class attribute.                                                  |
| `innerClassName`              | `'hidingHeader-in'`                 | Offspring class name.                                                     |
| `component`                   | `div`                               | Wrapper tag name.                                                         |
| `heightPropertyName`          | `'--hidingHeader-height'`           | CSS property name.                                                        |
| `boundsHeightPropertyName`    | `'--hidingHeader-bounds-height'`    | CSS property name.                                                        |
| `animationOffsetPropertyName` | `'--hidingHeader-animation-offset'` | CSS property name.                                                        |
| `snap`                        | `true`                              | Prevents only half of the header being visible when user stops scrolling. |
| `onHeightChange`              | noop                                | Callback.                                                                 |
| `onVisibleHeightChange`       | noop                                | Callback.                                                                 |
| `onHomeChange`                | noop                                | Callback which calls back when header enters or leaves initial position.  |

#### Example

Changes header background to opaque when sticking / not home.

```jsx
const MyApp = () => {
	const [isHome, setIsHome] = useState(true)

	return (
		<>
			<HidingHeader
				onHomeChange={(isHomeNew) => {
					setIsHome(isHomeNew)
				}}
			>
				<div style={{ backgroundColor: isHome ? 'transparent' : 'white' }}>
					Menu
				</div>
			</HidingHeader>
		</>
	)
}
```

For runtime manipulation you can use hooks.

| hook name               | description                                                                  |
| ----------------------- | ---------------------------------------------------------------------------- |
| `useHidingHeader`       | Returns object with multiple functions to obtain or manipulate header state. |
| `usePauseHidingHeader`  | Returns function. When called won't react to scroll.                         |
| `useRunHidingHeader`    | Returns function. When called will react to scroll again.                    |
| `useRevealHidingHeader` | Returns function. When called will force header to show.                     |
| `useHideHidingHeader`   | Returns function. When called will force header to hide.                     |
