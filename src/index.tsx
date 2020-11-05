import { hidingHeader } from 'hiding-header'
import React from 'react'

const contextDefault = {
	run: () => {},
	pause: () => {},
}

const Context = React.createContext(contextDefault)

export const useRunHidingHeader = () => React.useContext(Context).run

export const usePauseHidingHeader = () => React.useContext(Context).pause

export interface HidingHeaderProps {}

export const HidingHeader: React.FunctionComponent<HidingHeaderProps> = ({
	children,
}) => {
	const container = React.useRef<HTMLDivElement>(null)
	const [hidingHeaderCallbacks, setHidingHeaderCallbacks] = React.useState<
		ReturnType<typeof hidingHeader>
	>()

	React.useLayoutEffect(() => {
		const callbacks = hidingHeader(container.current!)
		setHidingHeaderCallbacks(callbacks)
	}, [])

	return (
		<div className="hidingHeader" ref={container}>
			<div className="hidingHeader-in">
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
