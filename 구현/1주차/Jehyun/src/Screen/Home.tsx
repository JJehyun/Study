import React, { useCallback } from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useInfiniteQuery } from "react-query";

import { Article, getArticles } from "../api/Article";
import InfiniteItem from "../component/InfiniteItem";

//무한 스크롤
export default function Home() {
  const { data, fetchNextPage } = useInfiniteQuery(
    ["Articles"],
    ({ pageParam = 1 }) => getArticles(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return Number(lastPage[lastPage.length - 1].id.toString()[0]) + 1;
      },
    }
  );
  const renderItem = useCallback(({ item }: { item: Article[] }) => {
    return <InfiniteItem item={item} />;
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data.pages}
        renderItem={renderItem}
        keyExtractor={() => Math.random().toString()}
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          fetchNextPage();
        }}
      />
    </View>
  );
}
