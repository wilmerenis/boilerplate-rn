// INTERFACES
export type AppStates = {
	user: any
	error?: any;
	idToken?: string;
	fetching: boolean;
  loggedIn: boolean;
}

export type Props = {
	children?: React.ReactNode
}
// INTERFACES END