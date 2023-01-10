import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Button, Text, View} from 'react-native';

export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
};

type NavigationProps = NavigationProp<RootStackParamList>;
export default function Home() {
  //home 구현 이동하기 클릭 시 상세보기 페이지로 이동
  const navigation = useNavigation<NavigationProps>();

  const onClick = useCallback(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none'},
    });
    navigation.navigate('Detail');
  }, [navigation]);

  return (
    <View>
      <Text>home</Text>
      <Button title="이동하기" onPress={onClick} />
    </View>
  );
}
