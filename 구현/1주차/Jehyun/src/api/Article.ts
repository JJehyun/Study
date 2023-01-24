import axios from 'axios';

export interface Article {
  albumId: Number;
  id: Number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const baseURL = __DEV__
  ? 'https://jsonplaceholder.typicode.com'
  : '/배포용 서버';

const client = axios.create({
  baseURL,
});

export async function getArticles(id: number, title: string = '') {
  const response = await client.get<Article[]>(
    `/photos?title_like=${title}&_page=${id}`,
  );
  return response.data;
}
