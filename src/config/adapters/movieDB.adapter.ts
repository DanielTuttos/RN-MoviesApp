import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1549f7b72847ab2fab119c4964c3dfd4',
    language: 'es',
  },
});
