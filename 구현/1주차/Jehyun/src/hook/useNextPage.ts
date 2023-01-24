import React, {useEffect} from 'react';
import {useQueryClient} from 'react-query';

import {getArticles} from '../api/Article';

//다음 페이지 미리 캐싱
export default function useNextPage(currentPage: number, search: string) {
  const queryClient = useQueryClient();
  useEffect(() => {
    const fn = async () => {
      const NextPage = currentPage + 1;
      await queryClient.prefetchQuery(['Articles', NextPage], () =>
        getArticles(NextPage, search),
      );
    };
    fn();
  }, [currentPage, queryClient, search]);
}
