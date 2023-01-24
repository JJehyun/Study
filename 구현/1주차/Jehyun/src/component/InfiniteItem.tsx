import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Article} from '../api/Article';

export default function InfiniteItem({item}: {item: Article[]}) {
  return (
    <View style={styles.Container}>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },
});
