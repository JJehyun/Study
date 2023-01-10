/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Alarm from './src/screen/Alarm';
import Message from './src/screen/Message';
import Search from './src/screen/Search';
import WholeStack from './src/screen/WholeStack';

export type RootTabParamList = {
  Notification: undefined;
  Search: undefined;
  Message: undefined;
  WholeStack: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function App() {
  //네비게이션 구현
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#fb8c00',
          }}>
          <Tab.Screen
            name="WholeStack"
            component={WholeStack}
            options={{
              headerShown: false,
              title: '홈',
              tabBarIcon: ({color, size}) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Notification"
            component={Alarm}
            options={{
              headerShown: false,
              title: '알람',
              tabBarIcon: ({color, size}) => (
                <Icon name="notifications" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              headerShown: false,
              title: '검색',
              tabBarIcon: ({color, size}) => (
                <Icon name="search" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Message"
            component={Message}
            options={{
              headerShown: false,
              title: '메세지',
            }}
          />
        </Tab.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;
