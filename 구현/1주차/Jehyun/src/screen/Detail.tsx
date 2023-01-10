import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Button, View} from 'react-native';

import {RootTabParamList} from '../../App';

export default function Detail() {
  //상세보기 페이지 Tab.Navigator 안보이게
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();
  const goBack = useCallback(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'flex'},
    });
    navigation.goBack();
  }, [navigation]);
  return (
    <View>
      <Button title="다음" />
      <Button title="뒤로가기" onPress={goBack} />
      <Button title="처음으로" />
    </View>
  );
}
