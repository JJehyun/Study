import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from './Home';
import Search from './Search';
import {Tab} from './types';

export default function RootTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#00AAFF'}}>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          title: '검색',
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
