import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// OWN COMPONENTS
import RootNavigation from './RootNavigation'

export default function App() {
	return (
		<NavigationContainer>
			<RootNavigation/>
		</NavigationContainer>
	);
}