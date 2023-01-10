import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import Box from '../components/Box';

const styles = StyleSheet.create({
  screen: {flex: 1},
});

type Isize = 'small' | 'medium' | 'large';
export default function Alarm() {
  // 토글 버튼을 눌러 box 컴포넌트 제어하기
  const [boxSize, setBoxsize] = useState<Isize>('medium');
  const [rounded, setRounded] = useState<boolean>(true);
  const [boxColor, setBoxColor] = useState<string>('blue');
  const [boxvisual, setBoxvisual] = useState<boolean>(true);
  const onPressButton = useCallback(() => {
    setBoxvisual(!boxvisual);
  }, [boxvisual]);
  return (
    <View style={styles.screen}>
      <Button title="토글" onPress={onPressButton} />
      {boxvisual ? (
        <Box rounded={rounded} size={boxSize} color={boxColor} />
      ) : (
        <></>
      )}
    </View>
  );
}
