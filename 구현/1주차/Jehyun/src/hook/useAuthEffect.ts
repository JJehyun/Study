import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

import {createToken} from '../api/client';
import {NavigationProps} from '../Screen/types';
import userSlice, {InitialState} from '../slices/user';
import {useAppDispatch} from '../store';

export default function useAuthEffect() {
  const navigation = useNavigation<NavigationProps>();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fn = async () => {
      const refreshToken = await EncryptedStorage.getItem('refreshToken');
      if (!refreshToken) {
        return;
      }
      const {idToken, accessToken}: KakaoOAuthToken = await login();
      dispatch(
        userSlice.actions.setUser({
          accessToken: accessToken,
          idToken: idToken,
        }),
      );
      createToken(accessToken);
      navigation.navigate('Main');
    };
    fn();
  }, [dispatch, navigation]);
}
