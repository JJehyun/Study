import {
  getProfile,
  KakaoProfile,
  logout,
} from '@react-native-seoul/kakao-login';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';

import {deleteToken} from '../api/client';
import userSlice from '../slices/user';
import {useAppDispatch} from '../store';
import {NavigationProps} from './types';

//로그아웃 구현
export default function Main() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();
      if (!message) {
        return;
      }
      await EncryptedStorage.removeItem('refreshToken');
      deleteToken();
      dispatch(
        userSlice.actions.setUser({
          accessToken: '',
          idToken: '',
        }),
      );
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <Button title="로그아웃 하겠음" onPress={signOutWithKakao} />
    </View>
  );
}
