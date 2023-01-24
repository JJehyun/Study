import React from 'react';
import {useMutation, useQueryClient} from 'react-query';

import {getArticles} from '../api/Article';

interface Props {
  currentPage: number;
  search: string;
}
export default function useSearch({currentPage, search}: Props) {
  const queryClient = useQueryClient();
  const mutation = useMutation(() => getArticles(currentPage, search), {
    onSuccess: data => {
      queryClient.setQueryData(['Articles', currentPage], data);
    },
    onError: e => {
      console.log(e);
    },
  });
  return mutation;
}
