import { hidingHeader } from 'hiding-header'
import React, { HTMLAttributes } from 'react'

const contextDefault = {
	run: () => {},
	pause: () => {},
}

const Context = React.createContext(contextDefault)

export const useRunHidingHeader = () => React.useContext(Context).run

export const usePauseHidingHeader = () => React.useContext(Context).pause

export interface HidingHeaderProps {
	className?: HTMLAttributes<HTMLDivElement>['className']
	innerClassName?: HTMLAttributes<HTMLDivElement>['className']
}

export const HidingHeader: React.FunctionComponent<HidingHeaderProps> = ({
	children,
	className = 'hidingHeader',
	innerClassName = 'hidingHeader-in',
}) => {
	const container = React.useRef<HTMLDivElement>(null)
	const [hidingHeaderCallbacks, setHidingHeaderCallbacks] = React.useState<
		ReturnType<typeof hidingHeader>
	>()

	React.useEffect(() => {
		const callbacks = hidingHeader(container.current!)
		setHidingHeaderCallbacks(callbacks)
	}, [])

	return (
		<div className={className} ref={container}>
			<div className={innerClassName}>
				<Context.Provider
					value={{
						run: hidingHeaderCallbacks?.run || contextDefault.run,
						pause: hidingHeaderCallbacks?.pause || contextDefault.pause,
					}}
				>
					{children}
				</Context.Provider>
			</div>
		</div>
	)
}
