import { hidingHeader, HidingHeaderOptions } from 'hiding-header'
import React, { HTMLAttributes } from 'react'

const Context = React.createContext<null | ReturnType<typeof hidingHeader>>(
	null
)

export const useHidingHeader = () => React.useContext(Context)
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
