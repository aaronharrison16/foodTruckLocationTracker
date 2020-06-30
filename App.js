import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'

import RootContainer from './Screens/RootContainer'
import configureStore from './Redux/Store/configureStore'

const store = configureStore()

export default function App () {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
}
