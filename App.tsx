import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import Router from './src/navigation';
import { store } from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  )
};


export default App;
