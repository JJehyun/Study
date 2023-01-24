import {Image} from '@rneui/themed';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {Article} from '../api/Article';

export default function RenderItem({item}: {item: Article}) {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <Image source={{uri: item.thumbnailUrl}} containerStyle={styles.item} />
        <View>
          <Text>{`title : ${item.title}`}</Text>
          <Text>{`id : ${item.id.toString()}`}</Text>
          <Text>{`albumId : ${item.albumId.toString()}`}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },
  item: {
    aspectRatio: 1,
    height: 100,
    width: 100,
  },
});
