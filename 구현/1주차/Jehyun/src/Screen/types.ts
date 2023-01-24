import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  Search: undefined;
  home: undefined;
};

export const Tab = createBottomTabNavigator<RootTabParamList>();
