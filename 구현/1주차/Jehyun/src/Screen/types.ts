import {NavigationProp, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
};
export type NavigationProps = NavigationProp<RootStackParamList>;

export const Stack = createNativeStackNavigator<RootStackParamList>();
