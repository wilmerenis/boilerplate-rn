import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Router from './navigations/router'
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <Provider store={store} >
      <Router/>
    </Provider>
  )
}
