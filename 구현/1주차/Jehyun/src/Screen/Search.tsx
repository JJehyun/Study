import {Button, SearchBar} from '@rneui/themed';
import React, {useCallback, useState} from 'react';
import {
  ActivityIndicator,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import PaginationDot from 'react-native-animated-pagination-dot';
import {FlatList} from 'react-native-gesture-handler';
import {useQuery} from 'react-query';

import {Article, getArticles} from '../api/Article';
import RenderItem from '../component/RenderItem';
import useNextPage from '../hook/useNextPage';
import useSearch from '../hook/useSearch';

//검색 구현
export default function Search() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');

  const {mutate} = useSearch({currentPage, search});
  useNextPage(currentPage, search);
  const onSubmit = () => {
    setCurrentPage(1);
    mutate();
  };
  const {data, isLoading} = useQuery(
    ['Articles', currentPage],
    () => getArticles(currentPage, search),
    {
      keepPreviousData: true,
    },
  );
  const NextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const PrevPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const renderItem = useCallback(({item}: {item: Article}) => {
    return <RenderItem item={item} />;
  }, []);
  if (isLoading) {
    return <ActivityIndicator size="large" color="black" />;
  }
  return (
    <SafeAreaView style={styles.screen}>
      <SearchBar
        placeholder="내용을 입력해주세요!"
        lightTheme={true}
        onChangeText={setSearch}
        onSubmitEditing={onSubmit}
        value={search}
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Prev"
          type="outline"
          onPress={PrevPage}
          disabled={isLoading}
        />
        <PaginationDot
          activeDotColor={'blue'}
          curPage={currentPage}
          maxPage={20}
        />
        <Button
          title="Next"
          type="outline"
          onPress={NextPage}
          disabled={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  screen: {flex: 1},
});
