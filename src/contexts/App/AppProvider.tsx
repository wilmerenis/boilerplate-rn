import React, { useState } from 'react'
import { AppContext } from './index'
// TYPES
import { AppStates, Props } from './types'


const initialStates: AppStates = {
	user: null,
	error: null,
	idToken: '',
	loggedIn: false,
	fetching: false,
}

export default function AppProvider({ children }: Props) {
	const [state, setState] = useState(initialStates)

	const handleLoading = (): void => {
		setState({ ...state, fetching: !state.fetching })
	}

	const handleError = (error: any): void => {
		setState({ ...state, error })
		handleLoading()
	}

	const handleLogin = (user: object): void => {
		setState({ ...state, loggedIn: true, user, fetching: false })
	}

	return (
		<AppContext.Provider value={{
			...state,
			handleLogin,
			handleError,
			handleLoading,
		}}>
			{children}
		</AppContext.Provider>
	)
}
