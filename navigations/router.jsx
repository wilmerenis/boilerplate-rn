import React from 'react'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/* HOMEPAGE */
import HomePage from '../scenes/HomePage'
/* HOMEPAGE END */

const Stack = createStackNavigator()

const RestrictedRoute = ({component, isLoggedIn, ...rest}) => (
  <></>
)

const PublicRoutes = ({ isLoggedIn }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default connect(state => ({
  isLoggedIn: state.Auth.isLoggedIn
}))(PublicRoutes)