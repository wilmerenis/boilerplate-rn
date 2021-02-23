import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './routes'

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      {Routes.map(({ options, name, component, ...props }, i) => (
        <Stack.Screen 
          {...props}
          key={i}
          name={name}
          options={options}
          component={component}
        />
      ))}
    </Stack.Navigator>
  );
}

export default RootNavigation;