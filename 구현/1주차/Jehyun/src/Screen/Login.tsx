import {KakaoOAuthToken, login} from '@react-native-seoul/kakao-login';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

import {createToken} from '../api/client';
import useAuthEffect from '../hook/useAuthEffect';
import userSlice from '../slices/user';
import {useAppDispatch} from '../store';
import {NavigationProps} from './types';

// 카카오 로그인 구현
export default function Login() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();
  const signInWithKakao = async (): Promise<void> => {
    try {
      const {idToken, accessToken, refreshToken}: KakaoOAuthToken =
        await login();
      if (!refreshToken) {
        return;
      }
      await EncryptedStorage.setItem('refreshToken', refreshToken);
      dispatch(
        userSlice.actions.setUser({
          accessToken: accessToken,
          idToken: idToken,
        }),
      );
      createToken(accessToken);
      navigation.navigate('Main');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <Button title="카카오 로그인" onPress={signInWithKakao} />
    </View>
  );
}
