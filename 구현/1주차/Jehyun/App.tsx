import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import RootStack from './src/Screen/RootStack';
import store from './src/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
