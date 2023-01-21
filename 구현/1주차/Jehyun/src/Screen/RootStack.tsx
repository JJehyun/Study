import React from 'react';

import useAuthEffect from '../hook/useAuthEffect';
import Login from './Login';
import Main from './Main';
import {Stack} from './types';

export default function RootStack() {
  useAuthEffect();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
}
