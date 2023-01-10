import React, {useCallback, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const $color = 'black';
const styles = StyleSheet.create({
  ButtonStyle: {
    justifyContent: 'center',
  },
  MainText: {
    color: $color,
    fontSize: 80,
  },
  TextContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
  },
});
export default function Search() {
  //카운터 만들기 구현
  const [count, SetCount] = useState(0);
  const onPressUpButton = useCallback(() => {
    SetCount(count + 1);
  }, [count]);
  const onPressDownButton = useCallback(() => {
    SetCount(count - 1);
  }, [count]);
  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.TextContainer}>
          <Text style={styles.MainText}>{count.toString()}</Text>
        </View>
        <View>
          <Button title="+" onPress={onPressUpButton} />
          <Button title="-" onPress={onPressDownButton} />
        </View>
      </SafeAreaView>
    </>
  );
}
