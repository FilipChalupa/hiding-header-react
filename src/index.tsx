import { hidingHeader, HidingHeaderOptions } from 'hiding-header'
import React, { HTMLAttributes } from 'react'

const contextDefault = {
	run: () => {},
	pause: () => {},
	reveal: () => {},
	hide: () => {},
}

const Context = React.createContext(contextDefault)

export const useRunHidingHeader = () => React.useContext(Context).run
export const usePauseHidingHeader = () => React.useContext(Context).pause
export const useRevealHidingHeader = () => React.useContext(Context).reveal
export const useHideHidingHeader = () => React.useContext(Context).hide

export interface HidingHeaderProps {
	className?: HTMLAttributes<HTMLDivElement>['className']
	innerClassName?: HTMLAttributes<HTMLDivElement>['className']

	heightPropertyName?: HidingHeaderOptions['heightPropertyName']
	boundsHeightPropertyName?: HidingHeaderOptions['boundsHeightPropertyName']
	animationOffsetPropertyName?: HidingHeaderOptions['animationOffsetPropertyName']
	snap?: HidingHeaderOptions['snap']
	onHeightChange?: HidingHeaderOptions['onHeightChange']
	onVisibleHeightChange?: HidingHeaderOptions['onVisibleHeightChange']
}

export const HidingHeader: React.FunctionComponent<HidingHeaderProps> = ({
	children,
	className = 'hidingHeader',
	innerClassName = 'hidingHeader-in',
	// hiding-header options
	heightPropertyName,
	boundsHeightPropertyName,
	animationOffsetPropertyName,
	snap,
	onHeightChange,
	onVisibleHeightChange,
}) => {
	const container = React.useRef<HTMLDivElement>(null)
	const [hidingHeaderCallbacks, setHidingHeaderCallbacks] = React.useState<
		ReturnType<typeof hidingHeader>
	>()

	React.useEffect(() => {
		const callbacks = hidingHeader(container.current!, {
			heightPropertyName,
			boundsHeightPropertyName,
			animationOffsetPropertyName,
			snap,
			onHeightChange,
			onVisibleHeightChange,
		})
		setHidingHeaderCallbacks(callbacks)
	}, [])

	return (
		<div className={className} ref={container}>
			<div className={innerClassName}>
				<Context.Provider
					value={{
						run: hidingHeaderCallbacks?.run || contextDefault.run,
						pause: hidingHeaderCallbacks?.pause || contextDefault.pause,
						reveal: hidingHeaderCallbacks?.reveal || contextDefault.reveal,
						hide: hidingHeaderCallbacks?.hide || contextDefault.hide,
					}}
				>
					{children}
				</Context.Provider>
			</div>
		</div>
	)
}
