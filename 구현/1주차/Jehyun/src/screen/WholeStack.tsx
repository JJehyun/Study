import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Detail from './Detail';
import Home from './Home';

export default function WholeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
