import { hidingHeader, HidingHeaderOptions } from 'hiding-header'
import React, { HTMLAttributes } from 'react'

const Context = React.createContext<
	undefined | ReturnType<typeof hidingHeader>
>(undefined)

export const useHidingHeader = () => React.useContext(Context)
export const useRunHidingHeader = () => React.useContext(Context)?.run
export const usePauseHidingHeader = () => React.useContext(Context)?.pause
export const useRevealHidingHeader = () => React.useContext(Context)?.reveal
export const useHideHidingHeader = () => React.useContext(Context)?.hide

export interface HidingHeaderProps {
	className?: HTMLAttributes<HTMLDivElement>['className']
	innerClassName?: HTMLAttributes<HTMLDivElement>['className']

	heightPropertyName?: HidingHeaderOptions['heightPropertyName']
	boundsHeightPropertyName?: HidingHeaderOptions['boundsHeightPropertyName']
	animationOffsetPropertyName?: HidingHeaderOptions['animationOffsetPropertyName']
	snap?: HidingHeaderOptions['snap']
	onHeightChange?: HidingHeaderOptions['onHeightChange']
	onVisibleHeightChange?: HidingHeaderOptions['onVisibleHeightChange']
	onHomeChange?: HidingHeaderOptions['onHomeChange']
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
	onHomeChange,
}) => {
	const container = React.useRef<HTMLDivElement>(null)
	const [hidingHeaderInstance, setHidingHeaderInstance] = React.useState<
		ReturnType<typeof hidingHeader>
	>()

	React.useEffect(() => {
		const instance = hidingHeader(container.current!, {
			heightPropertyName,
			boundsHeightPropertyName,
			animationOffsetPropertyName,
			snap,
			onHeightChange,
			onVisibleHeightChange,
			onHomeChange,
		})
		setHidingHeaderInstance(instance)
	}, [])

	return (
		<div className={className} ref={container}>
			<div className={innerClassName}>
				<Context.Provider value={hidingHeaderInstance}>
					{children}
				</Context.Provider>
			</div>
		</div>
	)
}
