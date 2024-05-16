'use client'

import { hidingHeader, HidingHeaderOptions } from 'hiding-header'
import {
	createContext,
	ElementType,
	HTMLAttributes,
	ReactNode,
	useContext,
	useEffect,
	useRef,
	useState,
	type FunctionComponent,
} from 'react'

const Context = createContext<undefined | ReturnType<typeof hidingHeader>>(
	undefined,
)

export const useHidingHeader = () => useContext(Context)
export const useRunHidingHeader = () => useContext(Context)?.run
export const usePauseHidingHeader = () => useContext(Context)?.pause
export const useRevealHidingHeader = () => useContext(Context)?.reveal
export const useHideHidingHeader = () => useContext(Context)?.hide

export interface HidingHeaderProps {
	children?: ReactNode
	className?: HTMLAttributes<HTMLDivElement>['className']
	innerClassName?: HTMLAttributes<HTMLDivElement>['className']
	component?: ElementType

	heightPropertyName?: HidingHeaderOptions['heightPropertyName']
	boundsHeightPropertyName?: HidingHeaderOptions['boundsHeightPropertyName']
	animationOffsetPropertyName?: HidingHeaderOptions['animationOffsetPropertyName']
	snap?: HidingHeaderOptions['snap']
	onHeightChange?: HidingHeaderOptions['onHeightChange']
	onVisibleHeightChange?: HidingHeaderOptions['onVisibleHeightChange']
	onHomeChange?: HidingHeaderOptions['onHomeChange']
}

export const HidingHeader: FunctionComponent<HidingHeaderProps> = ({
	children,
	className = 'hidingHeader',
	innerClassName = 'hidingHeader-in',
	component: Tag = 'div',
	// hiding-header options
	heightPropertyName,
	boundsHeightPropertyName,
	animationOffsetPropertyName,
	snap,
	onHeightChange,
	onVisibleHeightChange,
	onHomeChange,
}) => {
	const container = useRef<HTMLDivElement>(null)
	const [hidingHeaderInstance, setHidingHeaderInstance] =
		useState<ReturnType<typeof hidingHeader>>()

	useEffect(() => {
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

		return () => {
			instance.destroy()
		}
	}, [])

	return (
		<Tag className={className} ref={container}>
			<div className={innerClassName}>
				<Context.Provider value={hidingHeaderInstance}>
					{children}
				</Context.Provider>
			</div>
		</Tag>
	)
}
